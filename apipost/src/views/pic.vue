<template>
  <div class="wrapper">
    <h1>{{ msg }}</h1>
    <div class="count">{{ count }}</div>
    <el-row>
      <el-col :span="7">
        宽度：
      </el-col>
      <el-col :span="17">
        <el-input-number v-model="width"
                         @change="handleReFetchDraw" />
      </el-col>
    </el-row>
    <el-row>
      <el-col :span="7">
        高度：
      </el-col>
      <el-col :span="17">
        <el-input-number v-model="height"
                         @change="handleReFetchDraw" />
      </el-col>
    </el-row>
    <el-row>
      <el-col :span="7">
        关键字：
      </el-col>
      <el-col :span="17">
        <el-input v-model="keyword"
                  @change="handleReFetchDraw" />
      </el-col>
    </el-row>
    <el-row>
      <el-col :span="7">
        输出类型：
      </el-col>
      <el-col :span="17">
        <el-radio-group v-model="type"
                        @change="handleReDraw">
          <el-radio label="cover">
            cover
          </el-radio>
          <el-radio label="contain">
            contain
          </el-radio>
        </el-radio-group>
      </el-col>
    </el-row>
    <div class="canvas-wrapper">
      <canvas ref="canvas"
              width="300px"
              height="300px"
              style="background: lightgrey;"></canvas>
    </div>
    <el-button @click="nextImg">换一个</el-button>
    <el-button @click="saveImg">save</el-button>
  </div>
</template>

<script>
  import axios from 'axios';
  const imgPerPage = 30;
  const defaultConfig = {
    width: 300,
    height: 300,
    keyword: '壁纸',
    type: 'cover',
  }
  // 输入消抖
  function debounce (fn, wait) {
    let timer = null;
    return function res (...args) {
      const context = this
      if (timer) {
        clearTimeout(timer);
        timer = null;
      }
      timer = setTimeout(function exec () {
        fn.apply(context, args);
      }, wait)
    }
  }
  let timer;
  export default {
    mounted () {
      this.getConfig();
      this.fetchImgs();
      this.handleReDraw = debounce(this.handleReDraw, 1000);
      this.handleReFetchDraw = debounce(this.handleReFetchDraw, 1000);
      // 定期更新视图，为了fix外扩屏幕上canvas有时不更新的问题
      timer = setInterval(() => {
        this.count++;
      }, 100);
    },
    unmounted () {
      clearInterval(timer);
    },
    methods: {
      fetchImgs () {
        let queryWord = `${this.keyword || ''}`;
        if (this.width && this.height) {
          queryWord += `+${this.width}*${this.height}`;
        }
        axios({
          method: 'get',
          url: `https://image.baidu.com/search/acjson?tn=resultjson_com&ipn=rj&ct=201326592&is=&fp=result&queryWord=${queryWord}&cl=2&lm=-1&ie=utf-8&oe=utf-8&adpicid=&st=-1&z=&ic=0&hd=0&latest=0&copyright=&word=${queryWord}&s=&se=&tab=&width=&height=&face=0&istype=2&qc=&nc=1&fr=&expermode=&force=&pn=${this.pn * imgPerPage}&rn=${imgPerPage}`,
          //url: `http://wallpaper.apc.360.cn/index.php?c=WallPaper&a=search&kw=${queryWord}&start=${this.pn * imgPerPage}&count=${imgPerPage}`

        })
          .then((response) => {
            console.log(response);
            let data;
            if (typeof response.data === 'string') {
              try {
                data = JSON.parse(`${response.data.replace(/[<>]/g, '')}`).data;
              } catch (e) {
                console.log(e);
                data = [];
              }
            } else {
              data = response.data.data;
            }
            this.images = data;
            if (!this.images[0]) {
              this.$message.info('太牛逼了，这个类目下的图片都被你刷完了,换个关键词吧');
              return;
            }
            this.drawImg(this.images[0].hoverURL || this.images[0].thumbURL);
            this.index++;
            this.pn++;
          });
      },
      nextImg () {
        if (this.index % imgPerPage === 0) {
          this.fetchImgs(this.pn);
          this.index = 0;
        } else {
          if (!this.images[this.index]) {
            this.$message.info('太牛逼了，这个类目下的图片都被你刷完了,换个关键词吧');
            return;
          }
          this.drawImg(this.images[this.index].hoverURL || this.images[this.index].thumbURL);
          this.index++;
        }
      },
      drawImg (src) {
        const img = new Image();
        img.onload = () => {
          // 调整canvas图片区域
          let width, height;
          if (this.width > this.height) {
            width = 300;
            height = 300 / this.width * this.height;
          } else if (this.width < this.height) {
            height = 300;
            width = 300 / this.height * this.width;
          } else {
            width = 300;
            height = 300;
          }
          const canvas = this.$refs.canvas;
          canvas.width = width;
          canvas.height = height;
          const ctx = this.$refs.canvas.getContext('2d');
          // contain操作
          if (this.type === 'contain') {
            // 图片不缩放，调整绘制区域达到contain的效果
            let drawWidth, drawHeight = 0;
            // 调整绘制区域
            if (width / height >= img.width / img.height) {
              drawHeight = height;
              drawWidth = height * img.width / img.height;
            } else {
              drawWidth = width;
              drawHeight = width * img.height / img.width;
            }
            ctx.drawImage(img, 0, 0, img.width, img.height, (width - drawWidth) / 2, (height - drawHeight) / 2, drawWidth, drawHeight);
          }
          // cover操作
          if (this.type === 'cover') {
            // 绘制区域不操作，裁剪图片达到cover效果
            let imgwidth, imgheight = 0;
            if (width / height <= img.width / img.height) {
              imgheight = img.height;
              imgwidth = img.height * width / height;
            } else {
              imgwidth = img.width;
              imgheight = img.width * height / width;
            }
            ctx.drawImage(img, (img.width - imgwidth) / 2, (img.height - imgheight) / 2, imgwidth, imgheight, 0, 0, width, height);
          }
        }
        img.src = src;
      },
      saveImg () {
        const img = new Image();
        img.crossOrigin = "Anonymous";
        img.onload = () => {
          const canvas = document.createElement('canvas');
          const width = this.width;
          const height = this.height;
          canvas.width = width;
          canvas.height = height;
          const ctx = canvas.getContext('2d');
          // contain操作
          if (this.type === 'contain') {
            // 图片不缩放，调整绘制区域达到contain的效果
            let drawWidth, drawHeight = 0;
            // 调整绘制区域
            if (width / height >= img.width / img.height) {
              drawHeight = height;
              drawWidth = height * img.width / img.height;
            } else {
              drawWidth = width;
              drawHeight = width * img.height / img.width;
            }
            ctx.drawImage(img, 0, 0, img.width, img.height, (width - drawWidth) / 2, (height - drawHeight) / 2, drawWidth, drawHeight);
          }

          // cover操作
          if (this.type === 'cover') {
            // 绘制区域不操作，裁剪图片达到cover效果
            let imgwidth, imgheight = 0;
            if (width / height <= img.width / img.height) {
              imgheight = img.height;
              imgwidth = img.height * width / height;
            } else {
              imgwidth = img.width;
              imgheight = img.width * height / width;
            }
            ctx.drawImage(img, (img.width - imgwidth) / 2, (img.height - imgheight) / 2, imgwidth, imgheight, 0, 0, width, height);
          }

          canvas.toBlob((blob) => {
            var a = document.createElement("a");
            document.body.appendChild(a);
            a.download = `${this.keyword}${this.pn}${this.index}` + ".jpg";
            a.href = window.URL.createObjectURL(blob);
            a.click();
            document.body.removeChild(a);
          });
        }
        img.src = this.images[this.index - 1].hoverURL || this.images[this.index - 1].thumbURL;
      },
      handleReFetchDraw () {
        this.saveConfig();
        this.pn = 0;
        this.fetchImgs(this.pn);
        this.index = 0;
      },
      handleReDraw () {
        this.saveConfig();
        this.drawImg(this.images[this.index - 1].hoverURL || this.images[this.index - 1].thumbURL);
      },
      saveConfig () {
        window.localStorage.setItem('img-maker-config', JSON.stringify({
          width: this.width,
          height: this.height,
          keyword: this.keyword,
          type: this.type,
        }));
      },
      getConfig () {
        let config = defaultConfig;
        try {
          config = JSON.parse(window.localStorage.getItem('img-maker-config')) || defaultConfig;
        } catch (e) {
          console.log(e);
        }
        this.width = config.width;
        this.height = config.height;
        this.type = config.type;
        this.keyword = config.keyword;
      },
    },
    data () {
      return {
        count: 0,
        images: [],
        index: 0,
        pn: 0,
        msg: '图片生成器',
        width: 2160,
        height: 216,
        keyword: '壁纸',
        type: 'cover',
      }
    }
  }
</script>

<style lang="scss" >
  .wrapper {
    width: 330px;
    box-sizing: border-box;
    padding: 15px 15px;

    & h1 {
      font-size: 20px;
      margin-bottom: 10px;
    }
  }

  .count {
    height: 0;
    color: #fff;
  }

  .canvas-wrapper {
    margin: 15px 0;
    height: 300px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
  }
</style>