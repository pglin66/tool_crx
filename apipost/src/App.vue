<template>

  <router-view />
</template>

<style lang="scss">
  @import url("//at.alicdn.com/t/font_3360108_qp3ffltuew.css");
  html,
  body,
  #app {
    height: 100%;
  }
  html,
  body,
  div,
  span,
  applet,
  object,
  iframe,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  p,
  blockquote,
  pre,
  a,
  abbr,
  acronym,
  address,
  big,
  cite,
  code,
  del,
  dfn,
  em,
  img,
  ins,
  kbd,
  q,
  s,
  samp,
  small,
  strike,
  strong,
  sub,
  sup,
  tt,
  var,
  b,
  u,
  i,
  center,
  svg,
  dl,
  dt,
  dd,
  ol,
  ul,
  li,
  input,
  fieldset,
  form,
  label,
  legend,
  table,
  caption,
  tbody,
  tfoot,
  thead,
  tr,
  th,
  td,
  article,
  aside,
  canvas,
  details,
  embed,
  figure,
  figcaption,
  footer,
  header,
  hgroup,
  menu,
  nav,
  output,
  ruby,
  section,
  summary,
  time,
  mark,
  audio,
  video {
    margin: 0;
    padding: 0;
    border: 0;
    font-size: 100%;
    font: inherit;
    vertical-align: baseline;
    text-decoration: none;
    box-sizing: border-box;
  }
  /* HTML5 display-role reset for older browsers */
  article,
  aside,
  details,
  figcaption,
  figure,
  footer,
  header,
  hgroup,
  menu,
  nav,
  section {
    display: block;
  }
  body {
    line-height: 1;
  }
  ol,
  ul {
    list-style: none;
  }
  blockquote,
  q {
    quotes: none;
  }
  blockquote:before,
  blockquote:after,
  q:before,
  q:after {
    content: "";
    content: none;
  }
  table {
    border-collapse: collapse;
    border-spacing: 0;
  }

  .delay-color-bgcolor {
    transition-property: color, background;
    transition-duration: 200ms;
    .cricle {
      position: absolute;
      border-radius: 50%;
      background: red;
      top: 1px;
      right: 0px;
      width: 5px;
      height: 5px;
    }
  }

  .delay-visibility {
    transition-property: visibility;
    transition-duration: 0.1s;
  }

  .beautify-scroll-bar {
    &::-webkit-scrollbar {
      width: 8px;
      border-radius: 4px;
      background: none;
    }
    &::-webkit-scrollbar-track {
      margin: 1px;
      background: none;
    }
    &::-webkit-scrollbar-thumb {
      border-radius: 8px;
      background: none;
    }
    &:hover {
      &::-webkit-scrollbar {
        border: 1px solid #262629;
        background-color: #262629;
      }
      &::-webkit-scrollbar-track {
      }
      &::-webkit-scrollbar-thumb {
        border-radius: 4px;
        background: #262629;
      }
    }
  }

  div {
    &::-webkit-scrollbar {
      width: 8px;
      border-radius: 4px;
      background: none;
    }
    &::-webkit-scrollbar-track {
      margin: 1px;
      background: none;
    }
    &::-webkit-scrollbar-thumb {
      border-radius: 8px;
      background: none;
    }
    &:hover {
      &::-webkit-scrollbar {
        border: 1px solid var(--bgr1);
        background-color: var(--bg1);
      }
      &::-webkit-scrollbar-track {
        // margin: 1px;
        // background:var(--bgr4)
      }
      &::-webkit-scrollbar-thumb {
        border-radius: 4px;
        background: var(--bgr1);
      }
    }
  }

  /*ApiPost ??????????????????*/
  :root {
    /*????????????*/
    --error: #ed6a5f;
    --warning: #f5bf4f;
    --success: #61c554;

    /*????????????*/
    --method1: #2ba58f;
    --method2: #df5407;
    --method3: #3a86ff;

    /*?????????*/
    --fn1: #2b2b2b;
    --fn2: #999999;
    --fn3: #2b2b2b;
    --fn4: #287eff;
    --fn5: rgba(196, 196, 196, 0.7);
    --fn6: #2b2b2b;
    --fn8: #3a86ff;

    /*?????????*/
    --bg1: #f2f2f2;
    --bg2: #ffffff;
    --bg3: #e3e4e5;
    --bg4: #e9e9e9;
    --bg5: #2b2b2b;
    --bg6: #3a86ff;
    --bg7: #ffffff;
    --bg8: #e9e9e9;
    --bg9: #e9e9e9;
    --bg10: #ffffff;
    --bg11: #ffffff;
    --bg12: #fafafa;
    --bg13: #ffffff;
    --bg99: none;
    --bg98: #fce4b6;
    --split-bar-bg: #dedede;

    /*rgb?????????*/
    --bgr1: rgba(0, 0, 0, 0.06);
    --bgr2: rgba(0, 0, 0, 0.2);
    --bgr3: rgba(34, 34, 37, 0.95);
    --bgr4: rgba(0, 0, 0, 0.5);
    --bgr5: rgba(255, 255, 255, 0.8);
    --bgr6: rgba(0, 0, 0, 0.1);
    --bgr7: rgba(0, 0, 0, 0.02);

    /*?????????*/
    --bd1: #f4f4f4;
    --bd2: #ffffff;
    --bd3: #f7f7f8;
    --bd4: #f2f2f2;
    --bd5: #2b2b2b;
    --bd6: #f2f2f2;
    --login-modal-bg: #fff;
    --input-border-error: #fd6779;

    --bd7: #f4f4f4;
    --bd8: #e9e9e9;
    --bd9: #ffffff;
    --bd99: #fff;

    --his-right-bg: #ffffff;
    --his-right-bd: #e9e9e9;
    --clg-bg: #f4f4f4;

    /* ???????????????*/
    --mfn3: #666666;
    --mfn4: #ffffff;
    --mbg1: #ffffff;
    --mbg2: #f4f4f4;
    --mbg3: #ffffff;
    --mbg4: #f4f4f4;
  }
</style>

<!-- 
/*ApiPost ??????????????????*/
:root {
  /*????????????*/
  --error: #ed6a5f;
  --warning: #f5bf4f;
  --success: #61c554;

  /*????????????*/
  --method1: #2ba58f;
  --method2: #df5407;
  --method3: #3a86ff;

  /*?????????*/
  --fn1: #ffffff;
  --fn2: #666666;
  --fn3: #FFFFFF;
  --fn4: #287eff;
  --fn5: rgba(196, 196, 196, 0.3);
  --fn6: #C4C4C4;
  --fn7:#3A86FF;
  --fn8: #3A86FF;


  /*?????????*/
  --bg1:#262629;
  --bg2:#2D2D32;
  --bg3:#35353A;
  --bg4:#424246;
  --bg5:#ffffff;
  --bg6:#3A86FF;
  --bg7:#35353A;
  --bg8:rgba(255, 255, 255, 0.08);
  --bg9:#2D2D32;
  --bg10: #262629;
  --bg11: #35353A;
  --bg12:rgba(255, 255, 255, 0.08);
  --bg13:#262629;
  --bg99: #2D2D32;
  --bg98: #424246;
  --split-bar-bg:#363636;


  

  /*rgb?????????*/
  --bgr1: rgba(255, 255, 255, 0.08);
  --bgr2: rgba(255, 255, 255, 0.2);
  --bgr3: rgba(34, 34, 37, 0.95);
  --bgr4: rgba(0, 0, 0, 0.5);
  --bgr5: rgba(39, 39, 43, 0.8);
  --bgr6: rgba(0, 0, 0, 0.25);
  --bgr7: rgba(0, 0, 0, 0.2);
  --bgr7: rgba(255, 255, 255, 0.02);



  /*?????????*/
  --bd1:#0C0C0D;
  --bd2:#18181B;
  --bd3:#222225;
  --bd4:#38383C;
  --bd5:#424246;
  --bd6:#0C0C0D;
  --bd7:#262629;
  --bd8:#424246;
  --bd9:#0C0C0D;
  --bd99: #3A86FF;

  --title-color: #666666;







  --login-modal-bg: linear-gradient(180deg, #2f2f31 0%, #222225 100%);
  --input-border-error: #47272b;
  --his-right-bg:#35353A;
  --his-right-bd:#35353A;
  --clg-bg:#2D2D32;
  
  /* ???????????????*/
  --mfn3:#C4C4C4;
  --mfn4:#ffffff;
  --mbg1:#262629;
  --mbg2:#2D2D32;
  --mbg3:#35353A;
  --mbg4:#35353A;
  /* 
  --error: #ff4c4c;
  --title: #2b2b2b;
  --title-1: #666666;
  --title-2: #2BA58F;
  --title-3: #DF5407;
  --describe: #C4C4C4;
  --background-1: #ffeff2;
  --background-2: #38383C;
  --background-3: #1759ff;
  --background-4: #f9f9f9;
  --background-5: #4e7ffc;
  --background-6: #16c079;
  --background-7: #eeeeee;
  --background-8: #fce4b6;
  --background-9: #F75B3E;
  --background-10: #18181B;
  --background-11:rgba(255, 255, 255, 0.08);
  --background-14:rgba(34, 34, 37, 0.95);
  --main: #3a86ff;
  --main-1: #287eff;
  --main-2: #fafafa;
  --main-3: #979797;
  --border-1: #87a9ff; */
  /*Api ????????????*/
  /* --background: #222225; */
  /*Api ????????????*/
  /* --background-12: #18181B; */
  /*Api ????????????*/
  /* --background-13: #0C0C0D; */
  /*Api ????????????*/
  /* --border-2: #38383C;
  --border-3: #2c2c2c; */
  /*Api ????????????*/
  /* --font-c: #ffffff; */
  /* resize-line */
  --line-resize:#FFFFFF;
}
 -->