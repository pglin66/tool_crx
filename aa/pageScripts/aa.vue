<template>
  <div ref="selectWrapper" v-click-outside:[popperPaneRef]="handleClose" :class="wrapperKls"
    @click.stop="toggleMenu">
    <el-tooltip ref="tooltipRef" v-model:visible="dropMenuVisible" :effect="effect"
      :fallback-placements="['bottom-start', 'top-start', 'right', 'left']"
      :gpu-acceleration="false" :persistent="persistent" placement="bottom-start"
      :popper-class="[nsSelect.e('popper'), popperClass]" pure :stop-popper-mouse-event="false"
      :teleported="compatTeleported" :transition="`${nsSelect.namespace.value}-zoom-in-top`"
      trigger="click" @show="handleMenuEnter">
      <template #default>
        <div class="select-trigger">
          <div v-if="multiple" ref="tags" :class="nsSelect.e('tags')" :style="selectTagsStyle">
            <span v-if="collapseTags && selected.length" :class="[
                nsSelect.b('tags-wrapper'),
                { 'has-prefix': prefixWidth && selected.length },
              ]">
              <el-tag :closable="!selectDisabled && !selected[0].isDisabled" disable-transitions
                :hit="selected[0].hitState" :size="collapseTagSize" :type="tagType"
                @close="deleteTag($event, selected[0])">
                <span :class="nsSelect.e('tags-text')"
                  :style="{ maxWidth: inputWidth - 123 + 'px' }">
                  {{ selected[0].currentLabel }}
                </span>
              </el-tag>
              <el-tag v-if="selected.length > 1" :closable="false" disable-transitions
                :size="collapseTagSize" :type="tagType">
                <el-tooltip v-if="collapseTagsTooltip" :disabled="dropMenuVisible" :effect="effect"
                  :fallback-placements="['bottom', 'top', 'right', 'left']" placement="bottom"
                  :teleported="false">
                  <template #default>
                    <span :class="nsSelect.e('tags-text')">
                      + {{ selected.length - 1 }}
                    </span>
                  </template>
                  <template #content>
                    <div :class="nsSelect.e('collapse-tags')">
                      <div v-for="(item, idx) in selected" :key="idx"
                        :class="nsSelect.e('collapse-tag')">
                        <el-tag :key="getValueKey(item)" class="in-tooltip"
                          :closable="!selectDisabled && !item.isDisabled" disable-transitions
                          :hit="item.hitState" :size="collapseTagSize" :style="{ margin: '2px' }"
                          :type="tagType" @close="deleteTag($event, item)">
                          <span :class="nsSelect.e('tags-text')" :style="{
                              maxWidth: inputWidth - 75 + 'px',
                            }">
                            {{ item.currentLabel }}
                          </span>
                        </el-tag>
                      </div>
                    </div>
                  </template>
                </el-tooltip>
                <span v-else :class="nsSelect.e('tags-text')">
                  + {{ selected.length - 1 }}
                </span>
              </el-tag>
            </span>
            <!-- <div> -->
            <transition v-if="!collapseTags" @after-leave="resetInputHeight">
              <span :class="[
                  nsSelect.b('tags-wrapper'),
                  { 'has-prefix': prefixWidth && selected.length },
                ]">
                <el-tag v-for="item in selected" :key="getValueKey(item)"
                  :closable="!selectDisabled && !item.isDisabled" disable-transitions
                  :hit="item.hitState" :size="collapseTagSize" :type="tagType"
                  @close="deleteTag($event, item)">
                  <span :class="nsSelect.e('tags-text')"
                    :style="{ maxWidth: inputWidth - 75 + 'px' }">
                    {{ item.currentLabel }}
                  </span>
                </el-tag>
              </span>
            </transition>
            <!-- </div> -->
            <input v-if="filterable" ref="input" v-model="query" :autocomplete="autocomplete"
              :class="[nsSelect.e('input'), nsSelect.is(selectSize)]" :disabled="selectDisabled"
              :oninput="inputMaxLength(query)" :style="{
                marginLeft:
                  (prefixWidth && !selected.length) || tagInMultiLine
                    ? `${prefixWidth}px`
                    : '',
                flexGrow: 1,
                width: `${inputLength / (inputWidth - 102)}%`,
                maxWidth: `${inputWidth - 112}px`,
              }" type="text" @blur="handleBlur" @compositionend="handleComposition"
              @compositionstart="handleComposition" @compositionupdate="handleComposition"
              @focus="handleFocus" @input="debouncedQueryChange" @keydown="resetInputState"
              @keydown.delete="deletePrevTag" @keydown.down.prevent="navigateOptions('next')"
              @keydown.enter.stop.prevent="selectOption" @keydown.esc.stop.prevent="visible = false"
              @keydown.tab="visible = false" @keydown.up.prevent="navigateOptions('prev')"
              @keyup="managePlaceholder" />
          </div>

          <el-input v-if="multiple" :id="id" ref="reference" v-model="query"
            :autocomplete="autocomplete" :class="[
              nsSelect.is('focus', visible),
              multiple ? 'showWordLimit' : '',
            ]" :disabled="selectDisabled" :maxlength="maxlength" :name="name"
            :placeholder="currentPlaceholder"
            :readonly="showWordLimit ? !(showWordLimit && visible) : readonly"
            :show-word-limit="showWordLimit" :size="selectSize"
            :tabindex="multiple && filterable ? -1 : undefined" type="text" :validate-event="false"
            @blur="handleBlur" @compositionend="handleComposition"
            @compositionstart="handleComposition" @compositionupdate="handleComposition"
            @focus="handleFocus" @input="debouncedOnInputChange"
            @keydown.down.stop.prevent="navigateOptions('next')"
            @keydown.enter.stop.prevent="selectOption" @keydown.esc.stop.prevent="visible = false"
            @keydown.tab="visible = false" @keydown.up.stop.prevent="navigateOptions('prev')"
            @mouseenter="inputHovering = true" @mouseleave="inputHovering = false"
            @paste="debouncedOnInputChange">
            <template v-if="$slots.prefix" #prefix>
              <div style="
                  height: 100%;
                  display: flex;
                  justify-content: center;
                  align-items: center;
                ">
                <slot name="prefix" />
              </div>
            </template>
            <template #suffix>
              <el-icon v-if="iconComponent" v-show="!showClose"
                :class="[nsSelect.e('caret'), nsSelect.e('icon'), iconReverse]">
                <component :is="iconComponent" />
              </el-icon>
              <el-icon v-if="showClose && clearIcon"
                :class="[nsSelect.e('caret'), nsSelect.e('icon')]" @click="handleClearClick">
                <component :is="clearIcon" />
              </el-icon>
            </template>
          </el-input>

          <el-input v-else :id="id" ref="reference" v-model="selectedLabel"
            :autocomplete="autocomplete" :class="[nsSelect.is('focus', visible)]"
            :disabled="selectDisabled" :maxlength="maxlength" :name="name"
            :placeholder="currentPlaceholder" :readonly="readonly" :show-word-limit="showWordLimit"
            :size="selectSize" :tabindex="multiple && filterable ? -1 : undefined" type="text"
            :validate-event="false" @blur="handleBlur" @compositionend="handleComposition"
            @compositionstart="handleComposition" @compositionupdate="handleComposition"
            @focus="handleFocus" @input="debouncedOnInputChange"
            @keydown.down.stop.prevent="navigateOptions('next')"
            @keydown.enter.stop.prevent="selectOption" @keydown.esc.stop.prevent="visible = false"
            @keydown.tab="visible = false" @keydown.up.stop.prevent="navigateOptions('prev')"
            @mouseenter="inputHovering = true" @mouseleave="inputHovering = false"
            @paste="debouncedOnInputChange">
            <template v-if="$slots.prefix" #prefix>
              <div style="
                  height: 100%;
                  display: flex;
                  justify-content: center;
                  align-items: center;
                ">
                <slot name="prefix" />
              </div>
            </template>
            <template #suffix>
              <el-icon v-if="iconComponent" v-show="!showClose"
                :class="[nsSelect.e('caret'), nsSelect.e('icon'), iconReverse]">
                <component :is="iconComponent" />
              </el-icon>
              <el-icon v-if="showClose && clearIcon"
                :class="[nsSelect.e('caret'), nsSelect.e('icon')]" @click="handleClearClick">
                <component :is="clearIcon" />
              </el-icon>
            </template>
          </el-input>
        </div>
      </template>
      <template #content>
        <selectMenu>
          <el-scrollbar v-show="options.size > 0 && !loading" ref="scrollbar"
            v-loading="page.loading && isPage" :class="[
              nsSelect.is(
                'empty',
                !allowCreate && Boolean(query) && filteredOptionsCount === 0
              ),
            ]" element-loading-text="加载中…" tag="ul" :view-class="nsSelect.be('dropdown', 'list')"
            :wrap-class="nsSelect.be('dropdown', 'wrap')" @scroll="handleScroll">
            <el-option v-if="showNewOption" :created="true" :value="query" />
            <slot />
          </el-scrollbar>

          <template v-if="
              emptyText &&
              (!allowCreate || loading || (allowCreate && options.size === 0))
            ">
            <slot v-if="$slots.empty" name="empty" />
            <p v-else :class="nsSelect.be('dropdown', 'empty')">
              {{ emptyText }}
            </p>
          </template>
        </selectMenu>
      </template>
    </el-tooltip>
  </div>
</template>

<script>
import {
  computed,
  defineComponent,
  nextTick,
  onBeforeUnmount,
  onMounted,
  provide,
  reactive,
  toRefs,
  unref,
} from 'vue'
import { ClickOutside } from 'element-plus/lib/directives'
import { useFocus, useLocale, useNamespace } from 'element-plus/lib/hooks'
import ElInput from 'element-plus/lib/components/input'
import ElTooltip, {
  useTooltipContentProps,
} from 'element-plus/lib/components/tooltip'
import ElScrollbar from 'element-plus/lib/components/scrollbar'
import ElTag, { tagProps } from 'element-plus/lib/components/tag'
import ElIcon from 'element-plus/lib/components/icon'
import { useDeprecateAppendToBody } from 'element-plus/lib/components/popper'
import { CHANGE_EVENT, UPDATE_MODEL_EVENT } from 'element-plus/lib/constants'
import {
  addResizeListener,
  isValidComponentSize,
  removeResizeListener,
} from 'element-plus/lib/utils'
import { ArrowUp, CircleClose } from '@element-plus/icons-vue'
import ElOption from 'element-plus/lib/components/select/src/option'
import selectMenu from './select-dropdown'

import {
  useSelect,
  useSelectStates,
} from 'element-plus/lib/components/select/src/useSelect'
import { selectKey } from 'element-plus/lib/components/select/src/token'

import { Component, PropType } from 'vue'
import { ComponentSize } from 'element-plus/lib/constants'
import { SelectContext } from 'element-plus/lib/components/select/src/token'

const COMPONENT_NAME = 'ElSelect'
export default defineComponent({
  name: COMPONENT_NAME,
  componentName: COMPONENT_NAME,
  components: {
    ElInput,
    selectMenu,
    ElOption,
    ElTag,
    ElScrollbar,
    ElTooltip,
    ElIcon,
  },
  directives: { ClickOutside },
  props: {
    name: String,
    id: String,
    modelValue: {
      type: [Array, String, Number, Boolean, Object],
      default: undefined,
    },
    autocomplete: {
      type: String,
      default: 'off',
    },
    automaticDropdown: Boolean,
    size: {
      type: String,
      validator: isValidComponentSize,
    },
    effect: {
      type: String,
      default: 'light',
    },
    disabled: Boolean,
    clearable: Boolean,
    filterable: Boolean,
    allowCreate: Boolean,
    loading: Boolean,
    popperClass: {
      type: String,
      default: '',
    },
    remote: Boolean,
    loadingText: String,
    noMatchText: String,
    noDataText: String,
    remoteMethod: Function,
    filterMethod: Function,
    multiple: Boolean,
    isPage: Boolean,
    multipleLimit: {
      type: Number,
      default: 0,
    },
    placeholder: {
      type: String,
    },
    defaultFirstOption: Boolean,
    reserveKeyword: {
      type: Boolean,

      default: true,
    },
    valueKey: {
      type: String,
      default: 'value',
    },
    collapseTags: Boolean,
    collapseTagsTooltip: {
      type: Boolean,
      default: false,
    },
    popperAppendToBody: {
      type: Boolean,
      default: undefined,
    },
    teleported: useTooltipContentProps.teleported,
    persistent: {
      type: Boolean,
      default: true,
    },
    clearIcon: {
      type: [String, Object],
      default: CircleClose,
    },
    fitInputWidth: {
      type: Boolean,
      default: false,
    },
    suffixIcon: {
      type: [String, Object],
      default: ArrowUp,
    },
    // eslint-disable-next-line vue/require-prop-types
    tagType: { ...tagProps.type, default: 'info' },
    maxlength: {
      type: [String, Number],
      default: 20,
    },
    showWordLimit: {
      type: Boolean,
      default: false,
    },
  },
  emits: [
    UPDATE_MODEL_EVENT,
    CHANGE_EVENT,
    'remove-tag',
    'clear',
    'visible-change',
    'focus',
    'blur',
    'scrollPage',
  ],

  setup (props, ctx) {
    const nsSelect = useNamespace('select')
    const nsInput = useNamespace('input')
    const { t } = useLocale()
    const states = useSelectStates(props)

    const useSelectData = useSelect(props, states, ctx)

    const {
      optionsArray,
      selectSize,
      readonly,
      handleResize,
      collapseTagSize,
      debouncedOnInputChange,
      debouncedQueryChange,
      deletePrevTag,
      deleteTag,
      deleteSelected,
      handleOptionSelect,
      scrollToOption,
      setSelected,
      resetInputHeight,
      managePlaceholder,
      showClose,
      selectDisabled,

      iconComponent,
      iconReverse,

      showNewOption,

      emptyText,
      toggleLastOptionHitState,
      resetInputState,
      handleComposition,
      onOptionCreate,
      onOptionDestroy,
      handleMenuEnter,
      //handleFocus,
      blur,
      //handleBlur,
      handleClearClick,
      handleClose,
      toggleMenu,
      // selectOption,
      getValueKey,
      navigateOptions,
      dropMenuVisible,

      reference,
      input,
      tooltipRef,
      tags,
      selectWrapper,
      scrollbar,
      queryChange,
      groupQueryChange,
    } = useSelectData
    const { focus } = useFocus(reference)
    const handleBlur = (e) => {
      if (query.value && dropMenuVisible.value) {
        console.log(selected.value, typeof selected.value)
        if (
          !selected.value.length ||
          !selected.value.find((item) => {
            return item.currentLabel == query.value
          })
        ) {
          console.log(query.value, selected.value, showNewOption.value)
          if (showNewOption.value) {
            handleOptionSelect(
              {
                created: true,
                currentLabel: query.value,
                disabled: false,
                hover: true,
                isDisabled: false,
                itemSelected: false,
                label: undefined,

                value: query.value,
                visible: true,
              },
              true
            )
          } else {
            let index = optionsArray.value.findIndex((item) => {
              return item.currentLabel == query.value
            })
            handleOptionSelect(optionsArray.value[index], void 0)
          }
        }
      }
      useSelectData.handleBlur(e)
    }
    const selectOption = (e) => {
      console.log(e)
      useSelectData.selectOption(e)
    }
    const handleFocus = (e) => {
      console.log(e)
      useSelectData.handleFocus(e)
    }

    const {
      inputWidth,
      selected,

      inputLength,

      filteredOptionsCount,
      visible,
      softFocus,
      selectedLabel,
      hoverIndex,
      query,
      inputHovering,
      currentPlaceholder,
      menuVisibleOnFocus,
      isOnComposition,
      isSilentBlur,
      options,
      cachedOptions,
      optionsCount,
      prefixWidth,
      tagInMultiLine,
    } = toRefs(states)

    const wrapperKls = computed(() => {
      const classList = [nsSelect.b()]
      const _selectSize = unref(selectSize)
      if (_selectSize) {
        classList.push(nsSelect.m(_selectSize))
      }
      if (props.disabled) {
        classList.push(nsSelect.m('disabled'))
      }
      return classList
    })

    const selectTagsStyle = computed(() => ({
      maxWidth: `${unref(inputWidth) - 82}px`,
      width: '100%',
    }))

    provide(
      selectKey,
      reactive({
        props,
        options,
        optionsArray,
        cachedOptions,
        optionsCount,
        filteredOptionsCount,
        hoverIndex,
        handleOptionSelect,
        onOptionCreate,
        onOptionDestroy,
        selectWrapper,
        selected,
        setSelected,
        queryChange,
        groupQueryChange,
      })
    )

    onMounted(() => {
      states.cachedPlaceHolder = currentPlaceholder.value =
        props.placeholder || t('el.select.placeholder')
      if (
        props.multiple &&
        Array.isArray(props.modelValue) &&
        props.modelValue.length > 0
      ) {
        currentPlaceholder.value = ''
      }
      addResizeListener(selectWrapper.value, handleResize)
      if (reference.value && reference.value.$el) {
        const sizeMap = {
          large: 36,
          default: 32,
          small: 28,
        }
        const input = reference.value.input
        states.initialInputHeight =
          input.getBoundingClientRect().height || sizeMap[selectSize.value]
      }
      if (props.remote && props.multiple) {
        resetInputHeight()
      }
      nextTick(() => {
        if (!reference.value) return
        if (reference.value.$el) {
          inputWidth.value = reference.value.$el.getBoundingClientRect().width
        }
        if (ctx.slots.prefix) {
          const inputChildNodes = reference.value.$el.childNodes
          const input = Array.from(inputChildNodes).find(
            (item) => item.tagName === 'INPUT'
          )
          const prefix = reference.value.$el.querySelector(
            `.${nsInput.e('prefix')}`
          )
          prefixWidth.value = Math.max(
            prefix.getBoundingClientRect().width + 5,
            30
          )
          if (states.prefixWidth) {
            input.style.paddingLeft = `${Math.max(states.prefixWidth, 30)}px`
          }
        }
      })
      setSelected()
    })

    onBeforeUnmount(() => {
      removeResizeListener(selectWrapper.value, handleResize)
    })

    if (props.multiple && !Array.isArray(props.modelValue)) {
      ctx.emit(UPDATE_MODEL_EVENT, [])
    }
    if (!props.multiple && Array.isArray(props.modelValue)) {
      ctx.emit(UPDATE_MODEL_EVENT, '')
    }

    const popperPaneRef = computed(() => {
      return tooltipRef.value?.popperRef?.contentRef
    })

    const { compatTeleported } = useDeprecateAppendToBody(
      COMPONENT_NAME,
      'popperAppendToBody'
    )
    const inputMaxLength = (value) => {
      if ((value + '').length >= props.maxlength) {
        states.query = (value + '').slice(0, props.maxlength)
      } else {
        states.query = value + ''
      }
    }
    const page = ref({
      pageNum: 1,
      loading: false,
      inputValue: '',
      num: 0,
      total: 0,
    })
    const handleScroll = ({ scrollTop, scrollLeft }) => {
      let scrollHeight =
        scrollbar.value.resize$.offsetHeight -
        scrollbar.value.wrap$.offsetHeight +
        12
      if (scrollTop >= scrollHeight - 10 && !page.value.loading) {
        handlePageData(page.value.inputValue)
      }
      // emit('scrollPage',{scrollTop, scrollLeft,scrollHeight,...scrollbar.value})
    }
    const handlePageData = (inputValue = '') => {
      if (page.value.num < page.value.total) {
        return
      }
      page.value.inputValue = inputValue
      page.value.loading = true
      ctx.emit(
        'scrollPage',
        { pageNum: page.value.pageNum, inputValue },
        (num, total) => {
          page.value.num = num
          page.value.total = total
          page.value.loading = false
          if (num < total) {
          } else {
            page.value.pageNum += 1
          }
        }
      )
    }
    handlePageData()
    return {
      isPage: props.isPage,
      handlePageData,
      handleScroll,
      inputMaxLength,
      tagInMultiLine,
      prefixWidth,
      selectSize,
      readonly,
      handleResize,
      collapseTagSize,
      debouncedOnInputChange,
      debouncedQueryChange,
      deletePrevTag,
      deleteTag,
      deleteSelected,
      handleOptionSelect,
      scrollToOption,
      inputWidth,
      selected,
      inputLength,
      filteredOptionsCount,
      visible,
      softFocus,
      selectedLabel,
      hoverIndex,
      query,
      inputHovering,
      currentPlaceholder,
      menuVisibleOnFocus,
      isOnComposition,
      isSilentBlur,
      options,
      resetInputHeight,
      managePlaceholder,
      showClose,
      selectDisabled,
      iconComponent,
      iconReverse,
      showNewOption,
      emptyText,
      toggleLastOptionHitState,
      resetInputState,
      handleComposition,
      handleMenuEnter,
      handleFocus,
      blur,
      handleBlur,
      handleClearClick,
      handleClose,
      toggleMenu,
      selectOption,
      getValueKey,
      navigateOptions,
      dropMenuVisible,
      focus,

      reference,
      input,
      tooltipRef,
      popperPaneRef,
      tags,
      selectWrapper,
      scrollbar,


      wrapperKls,
      selectTagsStyle,

      compatTeleported,

      nsSelect,

      page,
    }
  },
})
</script>
<style lang="scss">
.el-select .el-input.showWordLimit .el-input__inner {
  color: #fff;
}
</style>
