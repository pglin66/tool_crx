<!--
 * @Author: pglin66@126.com
 * @Date: 2022-04-26 09:09:31
 * @LastEditors: pglin66@126.com
 * @LastEditTime: 2022-04-27 20:51:48
 * @FilePath: \mps_merchante:\2022年\electron-egg\frontend\src\views\home.vue
 * @Description: 
-->
<template>
    <div class="content-scale">
        <div class="scale-item" style="width: 290px;">
            <div class="memu-outer">
                <div class="menus">
                    <div class="menus-header">
                        <div class="menus-header-filters">
                            <el-input placeholder="搜索目录或接口" class="api-input">
                                <template #prepend>
                                    <span class="iconfont icon-search"></span>
                                </template>
                                <template #append>
                                    <el-select v-model="select" placeholder="选择" style="width: 110px">
                                        <el-option label="全部" value="1" />
                                        <el-option label="开发中" value="2" />
                                        <el-option label="已完成" value="3" />
                                        <el-option label="需要修改" value="4" />
                                    </el-select>
                                </template>
                            </el-input>
                            <div class="btn-target-to">
                                <span class="iconfont icon-target-to"></span>
                            </div>
                        </div>
                        <div class="button-area">
                            <div class="project-name">dsafaf</div>
                            <!-- arrow -->
                            <div class="button-list">
                                <span class="iconfont icon-api"></span>
                                <!-- <span class="iconfont"></span>
                                <span class="iconfont"></span>
                                <span class="iconfont"></span> -->
                            </div>
                        </div>

                    </div>
                    <div class="apis-trees menus-trees">
                        <draggable class="wrapper" v-model="list" @start="drag = true" @end="drag = false"
                            item-key="index">
                            <template #item="{ element }">
                                <div class="item">
                                    <div class="iconfont icon-api"></div>
                                    <div class="fied">POST</div>
                                    <div class="title">{{element.name}}</div>
                                </div>
                            </template>
                        </draggable>
                        <div class="menus-recycle"></div>
                    </div>
                </div>
            </div>
        </div>
        <!-- <div class="split-item" style="transform: translateX(0px);">
            <div class="splitbar"></div>
        </div> -->
        <div class="scale-item" style="flex: 1 1 0%;">
            <div class="apimanage">
                <div class="apimanage">
                    <div class="apimanage_api">
                        <div class="api-post-tabs apis-interface-tabs">
                            <div class="api-post-tabs-header">
                              
                                <div class="adds-panel" style="position: absolute;">
                                    <!--  v-model="editableTabsValue" @edit="handleTabsEdit"-->
                                    <el-tabs type="card" editable class="demo-tabs">
                                        <el-tab-pane label="item.title" name="item.name">

                                        </el-tab-pane>
                                    </el-tabs>
                                </div>
                                <div class="extra-panel">
                                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none"
                                        xmlns="http://www.w3.org/2000/svg" class="button"
                                        style="transform: rotate(180deg);">
                                        <path
                                            d="M11.896 7.25672C12.551 7.64378 12.551 8.59151 11.896 8.97857L4.50869 13.3438C3.84208 13.7377 2.99996 13.2571 2.99996 12.4828L2.99996 8.11765L2.99996 3.75245C2.99996 2.97815 3.84208 2.49761 4.50869 2.89152L11.896 7.25672Z">
                                        </path>
                                    </svg><svg width="16" height="16" viewBox="0 0 16 16" fill="none"
                                        xmlns="http://www.w3.org/2000/svg" class="button">
                                        <path
                                            d="M11.896 7.25672C12.551 7.64378 12.551 8.59151 11.896 8.97857L4.50869 13.3438C3.84208 13.7377 2.99996 13.2571 2.99996 12.4828L2.99996 8.11765L2.99996 3.75245C2.99996 2.97815 3.84208 2.49761 4.50869 2.89152L11.896 7.25672Z">
                                        </path>
                                    </svg>
                                </div>
                            </div>

                        </div>




                        <div class="api_open_api_page" v-if="false">
                            <div class="api-drawer api-drawer-right curlToCode"
                                style="position: absolute; display: none; height: 100%; width: 860px; z-index: 1000; transform: translate(100%, 0px);">
                                <div class="api-drawer-content" style="height: 100%; width: 100%;">
                                    <div class="api-drawer-close"
                                        style="position: absolute; right: 16px; background: var(--bg2);"><svg width="17"
                                            height="17" viewBox="0 0 17 17" xmlns="http://www.w3.org/2000/svg">
                                            <g opacity="0.5">
                                                <rect x="4.66699" y="3.81836" width="12" height="1.8" rx="0.9"
                                                    transform="rotate(45 4.66699 3.81836)"></rect>
                                                <rect x="3.81848" y="12.3037" width="12" height="1.8" rx="0.9"
                                                    transform="rotate(-45 3.81848 12.3037)"></rect>
                                            </g>
                                        </svg></div>
                                    <div class="curlToCode_header"><svg width="16" height="16" viewBox="0 0 16 16"
                                            fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path fill-rule="evenodd" clip-rule="evenodd"
                                                d="M2.59998 2.60001H13.4L13.4 13.4L2.59998 13.4V2.60001ZM1.59998 2.60001C1.59998 2.04772 2.04769 1.60001 2.59998 1.60001H13.4C13.9523 1.60001 14.4 2.04772 14.4 2.60001V13.4C14.4 13.9523 13.9523 14.4 13.4 14.4H2.59998C2.04769 14.4 1.59998 13.9523 1.59998 13.4V2.60001ZM5.70704 8.26274L7.21622 6.75355L6.50912 6.04644L4.64638 7.90918L4.29282 8.26274L4.64638 8.61629L6.50912 10.479L7.21622 9.77192L5.70704 8.26274ZM10.3942 8.26274L8.88497 6.75355L9.59208 6.04644L11.4548 7.90918L11.8084 8.26274L11.4548 8.61629L9.59208 10.479L8.88497 9.77192L10.3942 8.26274Z">
                                            </path>
                                        </svg><span>生成代码</span></div>
                                    <div class="curlToCode_body">
                                        <div class="curlToCode_body_l">
                                            <div class="api-post-menu">
                                                <ul>
                                                    <li class="api-post-menu-submenu-active api-post-menu-item"
                                                        style="padding-left: 12px;">
                                                        <div class="menu-item">cURL</div>
                                                    </li>
                                                    <li class="api-post-menu-item" style="padding-left: 12px;">
                                                        <div class="menu-item">Java</div>
                                                    </li>
                                                    <li class="api-post-menu-item" style="padding-left: 12px;">
                                                        <div class="menu-item">PHP(Curl)</div>
                                                    </li>
                                                    <li class="api-post-menu-item" style="padding-left: 12px;">
                                                        <div class="menu-item">PHP(Rmccue request)</div>
                                                    </li>
                                                    <li class="api-post-menu-item" style="padding-left: 12px;">
                                                        <div class="menu-item">Go</div>
                                                    </li>
                                                    <li class="api-post-menu-item" style="padding-left: 12px;">
                                                        <div class="menu-item">Python</div>
                                                    </li>
                                                    <li class="api-post-menu-item" style="padding-left: 12px;">
                                                        <div class="menu-item">Node(fetch)</div>
                                                    </li>
                                                    <li class="api-post-menu-item" style="padding-left: 12px;">
                                                        <div class="menu-item">Node(request)</div>
                                                    </li>
                                                    <li class="api-post-menu-item" style="padding-left: 12px;">
                                                        <div class="menu-item">R</div>
                                                    </li>
                                                    <li class="api-post-menu-item" style="padding-left: 12px;">
                                                        <div class="menu-item">Rust</div>
                                                    </li>
                                                    <li class="api-post-menu-item" style="padding-left: 12px;">
                                                        <div class="menu-item">Strest</div>
                                                    </li>
                                                    <li class="api-post-menu-item" style="padding-left: 12px;">
                                                        <div class="menu-item">Dart</div>
                                                    </li>
                                                    <li class="api-post-menu-item" style="padding-left: 12px;">
                                                        <div class="menu-item">MATLAB</div>
                                                    </li>
                                                    <li class="api-post-menu-item" style="padding-left: 12px;">
                                                        <div class="menu-item">Elixir</div>
                                                    </li>
                                                    <li class="api-post-menu-item" style="padding-left: 12px;">
                                                        <div class="menu-item">Ansible</div>
                                                    </li>
                                                    <li class="api-post-menu-item" style="padding-left: 12px;">
                                                        <div class="menu-item">Browser</div>
                                                    </li>
                                                    <li class="api-post-menu-item" style="padding-left: 12px;">
                                                        <div class="menu-item">JsonString</div>
                                                    </li>
                                                    <li class="api-post-menu-item" style="padding-left: 12px;">
                                                        <div class="menu-item">C#</div>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div class="curlToCode_body_r">
                                            <div class="btn-copy-code"><svg width="16" height="16" viewBox="0 0 16 16"
                                                    fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path fill-rule="evenodd" clip-rule="evenodd"
                                                        d="M12.6 2.60001H5.80005V4H10.2C10.7523 4 11.2 4.44772 11.2 5V13.4C11.2 13.9523 10.7523 14.4 10.2 14.4H3.40002C2.84774 14.4 2.40002 13.9523 2.40002 13.4V5C2.40002 4.44772 2.84774 4 3.40002 4H4.80005V2.60001C4.80005 2.04772 5.24776 1.60001 5.80005 1.60001H12.6C13.1523 1.60001 13.6 2.04772 13.6 2.60001V11C13.6 11.5523 13.1523 12 12.6 12H11.2V11H12.6L12.6 2.60001ZM3.40002 5H10.2L10.2 13.4L3.40002 13.4V5ZM7 8H5V7H7V8ZM5 11.2H8.6V10.2H5V11.2Z">
                                                    </path>
                                                </svg><span>复制代码</span></div>
                                            <section
                                                style="display: flex; position: relative; text-align: initial; width: 100%; height: 100%;">
                                                <div style="width: 100%; --codelens-font-features_ee1f61:&quot;liga&quot; off, &quot;calt&quot; off;"
                                                    data-keybinding-context="1" data-mode-id="plaintext">
                                                    <div class="monaco-editor no-user-select  showUnused showDeprecated vs-dark"
                                                        role="code" data-uri="inmemory://model/1"
                                                        style="width: 5px; height: 5px;">
                                                        <div data-mprt="3" class="overflow-guard"
                                                            style="width: 5px; height: 5px;">
                                                            <div class="margin" role="presentation" aria-hidden="true"
                                                                style="position: absolute; transform: translate3d(0px, 0px, 0px); contain: strict; top: 0px; height: 12px; width: 59px;">
                                                                <div class="glyph-margin"
                                                                    style="left: 0px; width: 0px; height: 12px;"></div>
                                                                <div class="margin-view-zones" role="presentation"
                                                                    aria-hidden="true" style="position: absolute;">
                                                                </div>
                                                                <div class="margin-view-overlays" role="presentation"
                                                                    aria-hidden="true"
                                                                    style="position: absolute; width: 59px; font-family: Consolas, &quot;Courier New&quot;, monospace; font-weight: normal; font-size: 12px; font-feature-settings: &quot;liga&quot; 0, &quot;calt&quot; 0; line-height: 12px; letter-spacing: 0px; height: 12px;">
                                                                    <div
                                                                        style="position:absolute;top:0px;width:100%;height:12px;">
                                                                        <div class="current-line current-line-margin-both"
                                                                            style="width:59px; height:12px;"></div>
                                                                        <div class="active-line-number line-numbers"
                                                                            style="left:0px;width:33px;">1</div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div class="monaco-scrollable-element editor-scrollable vs-dark"
                                                                role="presentation" data-mprt="5"
                                                                style="position: absolute; overflow: hidden; left: 59px; height: 5px;">
                                                                <div class="lines-content monaco-editor-background"
                                                                    style="position: absolute; overflow: hidden; width: 1e+06px; height: 1e+06px; transform: translate3d(0px, 0px, 0px); contain: strict; top: 0px; left: 0px;">
                                                                    <div class="view-overlays" role="presentation"
                                                                        aria-hidden="true"
                                                                        style="position: absolute; height: 0px; width: 1px;">
                                                                        <div
                                                                            style="position:absolute;top:0px;width:100%;height:12px;">
                                                                            <div class="current-line"
                                                                                style="width:1px; height:12px;"></div>
                                                                        </div>
                                                                    </div>
                                                                    <div role="presentation" aria-hidden="true"
                                                                        class="view-rulers"></div>
                                                                    <div class="view-zones" role="presentation"
                                                                        aria-hidden="true" style="position: absolute;">
                                                                    </div>
                                                                    <div class="view-lines monaco-mouse-cursor-text"
                                                                        role="presentation" aria-hidden="true"
                                                                        data-mprt="7"
                                                                        style="position: absolute; font-family: Consolas, &quot;Courier New&quot;, monospace; font-weight: normal; font-size: 12px; font-feature-settings: &quot;liga&quot; 0, &quot;calt&quot; 0; line-height: 12px; letter-spacing: 0px; width: 1px; height: 12px;">
                                                                        <div style="top:0px;height:12px;"
                                                                            class="view-line"><span><span></span></span>
                                                                        </div>
                                                                    </div>
                                                                    <div data-mprt="1" class="contentWidgets"
                                                                        style="position: absolute; top: 0px;"></div>
                                                                    <div role="presentation" aria-hidden="true"
                                                                        class="cursors-layer cursor-line-style cursor-solid">
                                                                        <div class="cursor monaco-mouse-cursor-text "
                                                                            style="height: 12px; top: 0px; left: 0px; font-family: Consolas, &quot;Courier New&quot;, monospace; font-weight: normal; font-size: 12px; font-feature-settings: &quot;liga&quot; 0, &quot;calt&quot; 0; line-height: 12px; letter-spacing: 0px; display: block; visibility: hidden; width: 2px;">
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div role="presentation" aria-hidden="true"
                                                                    class="invisible scrollbar horizontal fade"
                                                                    style="position: absolute; width: 0px; height: 12px; left: 0px; bottom: 0px;">
                                                                    <div class="slider"
                                                                        style="position: absolute; top: 0px; left: 0px; height: 12px; transform: translate3d(0px, 0px, 0px); contain: strict; width: 20px;">
                                                                    </div>
                                                                </div><canvas class="decorationsOverviewRuler"
                                                                    aria-hidden="true" width="14" height="5"
                                                                    style="position: absolute; transform: translate3d(0px, 0px, 0px); contain: strict; top: 0px; right: 0px; width: 14px; height: 5px; display: block;"></canvas>
                                                                <div role="presentation" aria-hidden="true"
                                                                    class="invisible scrollbar vertical fade"
                                                                    style="position: absolute; width: 14px; height: 5px; right: 0px; top: 0px;">
                                                                    <div class="slider"
                                                                        style="position: absolute; top: 0px; left: 0px; width: 14px; transform: translate3d(0px, 0px, 0px); contain: strict; height: 20px;">
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div role="presentation" aria-hidden="true"
                                                                style="width: 5px;"></div><textarea data-mprt="6"
                                                                class="inputarea monaco-mouse-cursor-text" wrap="off"
                                                                autocorrect="off" autocapitalize="off"
                                                                autocomplete="off" spellcheck="false"
                                                                aria-label="Editor content;Press Alt+F1 for Accessibility Options."
                                                                tabindex="0" role="textbox"
                                                                aria-roledescription="editor" aria-multiline="true"
                                                                aria-haspopup="false" aria-autocomplete="both"
                                                                style="font-family: Consolas, &quot;Courier New&quot;, monospace; font-weight: normal; font-size: 12px; font-feature-settings: &quot;liga&quot; 0, &quot;calt&quot; 0; line-height: 12px; letter-spacing: 0px; top: 0px; left: 0px; width: 1px; height: 1px;"></textarea>
                                                            <div style="position: absolute; top: 0px; left: 0px; width: 1px; height: 1px;"
                                                                class="monaco-editor-background textAreaCover line-numbers">
                                                            </div>
                                                            <div data-mprt="4" class="overlayWidgets"
                                                                style="width: 5px;">
                                                                <div class="accessibilityHelpWidget" role="dialog"
                                                                    aria-hidden="true"
                                                                    widgetid="editor.contrib.accessibilityHelpWidget"
                                                                    style="display: none; position: absolute;">
                                                                    <div role="document"></div>
                                                                </div>
                                                                <div widgetid="editor.contrib.quickInputWidget"
                                                                    style="position: absolute; top: 0px; right: 50%;">
                                                                </div>
                                                            </div>
                                                            <div data-mprt="8" class="minimap slider-mouseover"
                                                                role="presentation" aria-hidden="true"
                                                                style="position: absolute; left: 0px; width: 0px; height: 5px;">
                                                                <div class="minimap-shadow-hidden" style="height: 5px;">
                                                                </div><canvas width="0" height="5"
                                                                    style="position: absolute; left: 0px; width: 0px; height: 5px;"></canvas><canvas
                                                                    class="minimap-decorations-layer" width="0"
                                                                    height="5"
                                                                    style="position: absolute; left: 0px; width: 0px; height: 5px;"></canvas>
                                                                <div class="minimap-slider"
                                                                    style="position: absolute; transform: translate3d(0px, 0px, 0px); contain: strict; width: 0px;">
                                                                    <div class="minimap-slider-horizontal"
                                                                        style="position: absolute; width: 0px; height: 0px;">
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div data-mprt="2" class="overflowingContentWidgets">
                                                            <div class="monaco-editor rename-box"
                                                                widgetid="__renameInputWidget"
                                                                style="background-color: rgb(37, 37, 38); box-shadow: rgba(0, 0, 0, 0.36) 0px 0px 8px 2px; color: rgb(204, 204, 204); position: absolute; display: none; visibility: hidden; max-width: 150px;">
                                                                <input class="rename-input" type="text"
                                                                    aria-label="Rename input. Type new name and press Enter to commit."
                                                                    style="font-family: Consolas, &quot;Courier New&quot;, monospace; font-weight: normal; font-size: 12px; background-color: rgb(60, 60, 60); border-width: 0px; border-style: none;">
                                                                <div class="rename-label" style="font-size: 9.6px;">
                                                                    Enter to Rename, Shift+Enter to Preview</div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </section>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="apiHeader">
                                <div class="l1">
                                    <div class="left">
                                        <div class="api-post-status-mark">
                                            <div class="api-select">
                                                <div class="api-select-selector">
                                                    <div class="api-select-selector-value"
                                                        style="color: rgb(58, 134, 255);">
                                                        <div class="apistatus-value">
                                                            <div class="status_cycle"
                                                                style="background-color: rgb(58, 134, 255);"></div>
                                                            <div class="status_title">开发中</div>
                                                        </div>
                                                    </div>
                                                    <div class="api-select-selector-icon"><svg width="16" height="16"
                                                            viewBox="0 0 16 16" fill="none"
                                                            xmlns="http://www.w3.org/2000/svg"
                                                            style="fill: rgb(58, 134, 255);">
                                                            <path fill-rule="evenodd" clip-rule="evenodd"
                                                                d="M2.31021 5.64935C2.50388 5.45251 2.82045 5.44993 3.01729 5.6436L8.08159 10.6262L12.9768 5.6494C13.1705 5.45253 13.487 5.44991 13.6839 5.64356C13.8808 5.8372 13.8834 6.15377 13.6898 6.35064L8.79452 11.3275C8.4072 11.7212 7.77398 11.7264 7.38026 11.3391L2.31596 6.35643C2.11912 6.16277 2.11654 5.84619 2.31021 5.64935Z">
                                                            </path>
                                                        </svg></div>
                                                </div>
                                            </div>
                                        </div><span
                                            class="api-input-group api-input-borderless api-input-group-text"><input
                                                spellcheck="false" placeholder="请输入" autocomplete="new-password"
                                                class="api-input api-input-defalut api-input-text" type="text"
                                                maxlength="200" value="初始化视频"></span>
                                        <div class="button-modify"><span class="key">接口说明</span></div>
                                    </div>
                                    <div class="right"><span>
                                            <div class="menu-item delay-color-bgcolor"><svg width="12" height="12"
                                                    viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path
                                                        d="M11.896 7.25672C12.551 7.64378 12.551 8.59151 11.896 8.97857L4.50869 13.3438C3.84208 13.7377 2.99996 13.2571 2.99996 12.4828L2.99996 8.11765L2.99996 3.75245C2.99996 2.97815 3.84208 2.49761 4.50869 2.89152L11.896 7.25672Z">
                                                    </path>
                                                </svg></div>
                                        </span>
                                        <div style="display: flex;">
                                            <div><span>
                                                    <div class="menu-item delay-color-bgcolor diy">
                                                        <div class="btnleft"><svg width="16" height="16"
                                                                viewBox="0 0 16 16" fill="none"
                                                                xmlns="http://www.w3.org/2000/svg">
                                                                <path fill-rule="evenodd" clip-rule="evenodd"
                                                                    d="M2 3H11V4V8V12V13H6.5H2V3ZM12 13C12 13.5523 11.5523 14 11 14H6.5H2C1.44772 14 1 13.5523 1 13V3C1 2.44772 1.44772 2 2 2H11C11.5523 2 12 2.44772 12 3H14C14.5523 3 15 3.44772 15 4V8V12C15 12.5523 14.5523 13 14 13H13H12ZM12 8V12H13L14 12V8V4H12V8ZM4 5.5C4 5.22386 4.22386 5 4.5 5H8.5C8.77614 5 9 5.22386 9 5.5C9 5.77614 8.77614 6 8.5 6H4.5C4.22386 6 4 5.77614 4 5.5ZM4.5 8C4.22386 8 4 8.22386 4 8.5C4 8.77614 4.22386 9 4.5 9H8.5C8.77614 9 9 8.77614 9 8.5C9 8.22386 8.77614 8 8.5 8H4.5Z">
                                                                </path>
                                                            </svg><span class="only-large">备份</span></div>
                                                    </div>
                                                </span></div>
                                            <div class="save-more" style="display: flex; align-items: center;">
                                                <div class="split-line"></div><svg width="16" height="16"
                                                    viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path fill-rule="evenodd" clip-rule="evenodd"
                                                        d="M2.31021 5.64935C2.50388 5.45251 2.82045 5.44993 3.01729 5.6436L8.08159 10.6262L12.9768 5.6494C13.1705 5.45253 13.487 5.44991 13.6839 5.64356C13.8808 5.8372 13.8834 6.15377 13.6898 6.35064L8.79452 11.3275C8.4072 11.7212 7.77398 11.7264 7.38026 11.3391L2.31596 6.35643C2.11912 6.16277 2.11654 5.84619 2.31021 5.64935Z">
                                                    </path>
                                                </svg>
                                                <div class="drop-list backup">
                                                    <div class="drop-item">创建备份</div>
                                                    <div class="drop-item">备份还原</div>
                                                </div>
                                            </div>
                                        </div>
                                        <div><span>
                                                <div class="menu-item delay-color-bgcolor" style="margin-left: 8px;">
                                                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none"
                                                        xmlns="http://www.w3.org/2000/svg">
                                                        <path fill-rule="evenodd" clip-rule="evenodd"
                                                            d="M10 4C10 2.89543 9.10457 2 8 2C6.89543 2 6 2.89543 6 4V6L8 6L10 6H11L12.6 6C13.1523 6 13.6 6.44772 13.6 7V13.4C13.6 13.9523 13.1523 14.4 12.6 14.4H3.40002C2.84774 14.4 2.40002 13.9523 2.40002 13.4V7C2.40002 6.44772 2.84774 6 3.40002 6L5 6V4C5 2.34315 6.34315 1 8 1C9.65685 1 11 2.34315 11 4H10ZM11 7H10H6H5L3.40002 7L3.40002 13.4H12.6L12.6 7L11 7Z">
                                                        </path>
                                                    </svg><span>锁定</span>
                                                </div>
                                            </span></div><span>
                                            <div class="menu-item delay-color-bgcolor" style="margin-left: 8px;"><svg
                                                    width="16" height="16" viewBox="0 0 16 16" fill="none"
                                                    xmlns="http://www.w3.org/2000/svg">
                                                    <path fill-rule="evenodd" clip-rule="evenodd"
                                                        d="M5.80005 1.89999C4.97162 1.89999 4.30005 2.57157 4.30005 3.39999V4.79999H2.59998C2.04769 4.79999 1.59998 5.2477 1.59998 5.79999V13.4C1.59998 13.9523 2.04769 14.4 2.59998 14.4H10.2C10.7523 14.4 11.2 13.9523 11.2 13.4V11.6584C11.2612 11.6851 11.3289 11.7 11.4 11.7H12.6C13.4285 11.7 14.1 11.0284 14.1 10.2V3.39999C14.1 2.57157 13.4285 1.89999 12.6 1.89999H5.80005ZM11.2 10.7416C11.2612 10.7148 11.3289 10.7 11.4 10.7H12.6C12.8762 10.7 13.1 10.4761 13.1 10.2V3.39999C13.1 3.12385 12.8762 2.89999 12.6 2.89999H5.80005C5.52391 2.89999 5.30005 3.12385 5.30005 3.39999V4.79999H10.2C10.7523 4.79999 11.2 5.2477 11.2 5.79999V10.7416ZM2.59998 5.79999H10.2V13.4H2.59998L2.59998 5.79999Z">
                                                    </path>
                                                </svg><span>克隆</span></div>
                                        </span><span>
                                            <div class="menu-item delay-color-bgcolor" style="margin-left: 8px;"><svg
                                                    width="16" height="16" viewBox="0 0 16 16" fill="none"
                                                    xmlns="http://www.w3.org/2000/svg">
                                                    <path fill-rule="evenodd" clip-rule="evenodd"
                                                        d="M2.59998 2.60001H13.4L13.4 13.4L2.59998 13.4V2.60001ZM1.59998 2.60001C1.59998 2.04772 2.04769 1.60001 2.59998 1.60001H13.4C13.9523 1.60001 14.4 2.04772 14.4 2.60001V13.4C14.4 13.9523 13.9523 14.4 13.4 14.4H2.59998C2.04769 14.4 1.59998 13.9523 1.59998 13.4V2.60001ZM5.70704 8.26274L7.21622 6.75355L6.50912 6.04644L4.64638 7.90918L4.29282 8.26274L4.64638 8.61629L6.50912 10.479L7.21622 9.77192L5.70704 8.26274ZM10.3942 8.26274L8.88497 6.75355L9.59208 6.04644L11.4548 7.90918L11.8084 8.26274L11.4548 8.61629L9.59208 10.479L8.88497 9.77192L10.3942 8.26274Z">
                                                    </path>
                                                </svg><span>生成代码</span></div>
                                        </span><span>
                                            <div class="menu-item delay-color-bgcolor" style="margin-left: 8px;"><svg
                                                    width="16" height="16" viewBox="0 0 16 16" fill="none"
                                                    xmlns="http://www.w3.org/2000/svg">
                                                    <path fill-rule="evenodd" clip-rule="evenodd"
                                                        d="M12.0977 2.22906C11.856 2.09547 11.5518 2.18309 11.4182 2.42477C11.2846 2.66645 11.3723 2.97067 11.614 3.10425L12.5023 3.59531C10.3829 4.17783 9.01651 5.36174 8.18472 6.68738C7.22795 8.21219 6.99562 9.89531 7.08512 11.0032C7.10736 11.2784 7.34852 11.4835 7.62376 11.4613C7.89901 11.439 8.10411 11.1979 8.08188 10.9226C8.00723 9.99875 8.20497 8.53656 9.03177 7.21888C9.72345 6.11654 10.8679 5.09383 12.7187 4.57303L12.0896 5.30328C11.9094 5.5125 11.9329 5.82821 12.1421 6.00844C12.3513 6.18867 12.667 6.16518 12.8473 5.95597L14.2181 4.36468C14.5081 4.02811 14.4152 3.51007 14.0264 3.29516L12.0977 2.22906ZM3.66663 3.75919C3.39048 3.75919 3.16663 3.98304 3.16663 4.25919V12.3333C3.16663 12.6094 3.39048 12.8333 3.66663 12.8333H12.6937C12.9698 12.8333 13.1937 12.6094 13.1937 12.3333V8.29623H14.1937V12.3333C14.1937 13.1617 13.5221 13.8333 12.6937 13.8333H3.66663C2.8382 13.8333 2.16663 13.1617 2.16663 12.3333V4.25919C2.16663 3.43076 2.8382 2.75919 3.66663 2.75919H8.18015V3.75919H3.66663Z">
                                                    </path>
                                                </svg><span>分享文档</span></div>
                                        </span><span>
                                            <div class="menu-item delay-color-bgcolor">
                                                <div class="menu-btn" style="margin-left: 8px;"><svg width="16"
                                                        height="16" viewBox="0 0 16 16" fill="none"
                                                        xmlns="http://www.w3.org/2000/svg">
                                                        <path fill-rule="evenodd" clip-rule="evenodd"
                                                            d="M3 3H13V13H3L3 3ZM2 3C2 2.44772 2.44772 2 3 2H13C13.5523 2 14 2.44772 14 3V13C14 13.5523 13.5523 14 13 14H3C2.44772 14 2 13.5523 2 13V3ZM7.54043 4.30304L6.04043 7.80304L5.74173 8.5H6.5H9.33714L8.51924 11.3626L9.48076 11.6374L10.4808 8.13736L10.6629 7.5H10H7.25827L8.45957 4.69696L7.54043 4.30304Z">
                                                        </path>
                                                    </svg><span class="only-large">保存并归档</span></div><span><svg
                                                        width="16" height="16" viewBox="0 0 16 16" fill="none"
                                                        xmlns="http://www.w3.org/2000/svg" class="only-large">
                                                        <path fill-rule="evenodd" clip-rule="evenodd"
                                                            d="M13 8C13 10.7614 10.7614 13 8 13C5.23858 13 3 10.7614 3 8C3 5.23858 5.23858 3 8 3C10.7614 3 13 5.23858 13 8ZM14 8C14 11.3137 11.3137 14 8 14C4.68629 14 2 11.3137 2 8C2 4.68629 4.68629 2 8 2C11.3137 2 14 4.68629 14 8ZM6.55067 5.28269C6.924 4.87202 7.44667 4.66669 8.11867 4.66669C8.716 4.66669 9.192 4.82535 9.556 5.16135C9.90133 5.47869 10.0787 5.91735 10.0787 6.47735C10.0787 6.89735 9.95733 7.26135 9.724 7.56935C9.63067 7.68135 9.37867 7.92402 8.968 8.28802C8.76267 8.46535 8.62267 8.63335 8.52933 8.80135C8.408 9.00669 8.352 9.23069 8.352 9.48269V9.69735H7.60533V9.48269C7.60533 9.17469 7.66133 8.90402 7.77333 8.67069C7.904 8.39069 8.212 8.03602 8.716 7.58802L8.71602 7.588C8.86534 7.43868 8.97734 7.32668 9.03333 7.25202C9.22 7.01869 9.31333 6.77602 9.31333 6.51469C9.31333 6.14135 9.20133 5.85202 8.996 5.64669C8.78133 5.42269 8.47333 5.32002 8.08133 5.32002C7.61467 5.32002 7.26933 5.46935 7.04533 5.77735C6.84 6.03869 6.73733 6.39335 6.73733 6.85069H6C6 6.19735 6.17733 5.67469 6.55067 5.28269ZM7.57733 10.5094C7.68933 10.3974 7.82 10.3507 7.97867 10.3507C8.13733 10.3507 8.27733 10.3974 8.38933 10.5094C8.492 10.612 8.548 10.7427 8.548 10.9014C8.548 11.0694 8.492 11.2 8.38 11.3027C8.268 11.4054 8.13733 11.4614 7.97867 11.4614C7.82 11.4614 7.68933 11.4054 7.57733 11.3027C7.46533 11.1907 7.41867 11.06 7.41867 10.9014C7.41867 10.7427 7.46533 10.612 7.57733 10.5094Z">
                                                        </path>
                                                    </svg></span>
                                            </div>
                                        </span>
                                        <div class="menu-item delay-color-bgcolor diy savemode"
                                            style="margin-left: 8px;">
                                            <div><span>
                                                    <div class="btnleft"><svg width="16" height="16" viewBox="0 0 16 16"
                                                            fill="none" xmlns="http://www.w3.org/2000/svg">
                                                            <path fill-rule="evenodd" clip-rule="evenodd"
                                                                d="M13 3H12V5V6H11H5H4V5V3H3L3 13H13V3ZM5 3H11V5H5V3ZM13 2H12H11H5H4H3C2.44772 2 2 2.44772 2 3V13C2 13.5523 2.44772 14 3 14H13C13.5523 14 14 13.5523 14 13V3C14 2.44772 13.5523 2 13 2ZM5.5 9C5.22386 9 5 9.22386 5 9.5C5 9.77614 5.22386 10 5.5 10H10.5C10.7761 10 11 9.77614 11 9.5C11 9.22386 10.7761 9 10.5 9H5.5Z">
                                                            </path>
                                                        </svg><span style="padding-left: 4px;">保存</span></div>
                                                </span></div>
                                            <div class="save-more">
                                                <div class="split-line"></div><svg width="16" height="16"
                                                    viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path fill-rule="evenodd" clip-rule="evenodd"
                                                        d="M2.31021 5.64935C2.50388 5.45251 2.82045 5.44993 3.01729 5.6436L8.08159 10.6262L12.9768 5.6494C13.1705 5.45253 13.487 5.44991 13.6839 5.64356C13.8808 5.8372 13.8834 6.15377 13.6898 6.35064L8.79452 11.3275C8.4072 11.7212 7.77398 11.7264 7.38026 11.3391L2.31596 6.35643C2.11912 6.16277 2.11654 5.84619 2.31021 5.64935Z">
                                                    </path>
                                                </svg>
                                                <div class="drop-list">
                                                    <div class="drop-item">根目录</div>
                                                    <div class="drop-item"
                                                        target_id="7851b838-d760-48ff-bbe5-62f732fa2ad0"
                                                        target_type="folder" name="登陆" sort="1" version="1"
                                                        mark="developing" status="1" method="POST" is_example="0" url=""
                                                        parent_id="0" level="1"
                                                        value="7851b838-d760-48ff-bbe5-62f732fa2ad0">|—登陆</div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="l2">
                                    <div class="urlpanel">
                                        <div class="api-select">
                                            <div class="api-select-selector">
                                                <div class="api-select-selector-value">POST</div>
                                                <div class="api-select-selector-icon"><svg width="16" height="16"
                                                        viewBox="0 0 16 16" fill="none"
                                                        xmlns="http://www.w3.org/2000/svg">
                                                        <path fill-rule="evenodd" clip-rule="evenodd"
                                                            d="M2.31021 5.64935C2.50388 5.45251 2.82045 5.44993 3.01729 5.6436L8.08159 10.6262L12.9768 5.6494C13.1705 5.45253 13.487 5.44991 13.6839 5.64356C13.8808 5.8372 13.8834 6.15377 13.6898 6.35064L8.79452 11.3275C8.4072 11.7212 7.77398 11.7264 7.38026 11.3391L2.31596 6.35643C2.11912 6.16277 2.11654 5.84619 2.31021 5.64935Z">
                                                        </path>
                                                    </svg></div>
                                            </div>
                                        </div><span
                                            class="api-input-group api-input-borderless api-input-group-text"><input
                                                spellcheck="false" placeholder="请输入接口地址(http(s)://)"
                                                autocomplete="new-password"
                                                class="api-input api-input-defalut api-input-text" type="text"
                                                maxlength="99999"
                                                value="https://www.91beeshare.com/user/userstudy/wx/update/companycourse/play/count"></span>
                                    </div>
                                    <div class="button send">
                                        <div class="texts">发送</div>
                                        <div class="btnmore"><svg width="16" height="16" viewBox="0 0 16 16" fill="none"
                                                xmlns="http://www.w3.org/2000/svg">
                                                <path fill-rule="evenodd" clip-rule="evenodd"
                                                    d="M2.31021 5.64935C2.50388 5.45251 2.82045 5.44993 3.01729 5.6436L8.08159 10.6262L12.9768 5.6494C13.1705 5.45253 13.487 5.44991 13.6839 5.64356C13.8808 5.8372 13.8834 6.15377 13.6898 6.35064L8.79452 11.3275C8.4072 11.7212 7.77398 11.7264 7.38026 11.3391L2.31596 6.35643C2.11912 6.16277 2.11654 5.84619 2.31021 5.64935Z">
                                                </path>
                                            </svg></div>
                                    </div>
                                </div>
                            </div>
                            <div class="api-content">
                                <div class="apipost-scale vertical" style="height: 100%;">
                                    <div class="scale-item" style="height: 331.5px;">
                                        <div class="request-area" style="display: block;">
                                            <div class="api-post-tabs api_send_tabs">
                                                <div class="api-post-tabs-header">
                                                    <div class="api-post-tabs-header-content api-send-headers">
                                                        <div>
                                                            <div class="api-post-tabs-headitem">Header</div>
                                                            <div class="api-post-tabs-headitem">Query</div>
                                                            <div class="api-post-tabs-headitem active">Body</div>
                                                            <div class="api-post-tabs-headitem">认证</div>
                                                            <div class="api-post-tabs-headitem">预执行脚本</div>
                                                            <div class="api-post-tabs-headitem">后执行脚本</div>
                                                            <div class="api-post-tabs-headitem">Mock 服务</div>
                                                        </div>
                                                    </div>
                                                    <div class="mini-header-content">
                                                        <div class="api-select">
                                                            <div class="api-select-selector">
                                                                <div class="api-select-selector-value">Body</div>
                                                                <div class="api-select-selector-icon"><svg width="16"
                                                                        height="16" viewBox="0 0 16 16" fill="none"
                                                                        xmlns="http://www.w3.org/2000/svg">
                                                                        <path fill-rule="evenodd" clip-rule="evenodd"
                                                                            d="M2.31021 5.64935C2.50388 5.45251 2.82045 5.44993 3.01729 5.6436L8.08159 10.6262L12.9768 5.6494C13.1705 5.45253 13.487 5.44991 13.6839 5.64356C13.8808 5.8372 13.8834 6.15377 13.6898 6.35064L8.79452 11.3275C8.4072 11.7212 7.77398 11.7264 7.38026 11.3391L2.31596 6.35643C2.11912 6.16277 2.11654 5.84619 2.31021 5.64935Z">
                                                                        </path>
                                                                    </svg></div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="api-post-tabs-content">
                                                    <div>
                                                        <div class="formtable">
                                                            <div class="table-header">
                                                                <div class="table-header-left">
                                                                    <div class="btn-import"><svg width="16" height="16"
                                                                            viewBox="0 0 16 16" fill="none"
                                                                            xmlns="http://www.w3.org/2000/svg">
                                                                            <path fill-rule="evenodd"
                                                                                clip-rule="evenodd"
                                                                                d="M12.3999 5.39823L8.57666 9.22148V1.50665C8.57666 1.23051 8.3528 1.00665 8.07666 1.00665C7.80052 1.00665 7.57666 1.23051 7.57666 1.50665V9.37138L3.60351 5.39823C3.40824 5.20297 3.09166 5.20297 2.8964 5.39823C2.70114 5.59349 2.70114 5.91007 2.8964 6.10533L7.64816 10.8571C7.84342 11.0524 8.16 11.0524 8.35527 10.8571L13.107 6.10533C13.3023 5.91007 13.3023 5.59349 13.107 5.39823C12.9118 5.20297 12.5952 5.20297 12.3999 5.39823ZM3.5 10C3.5 9.72387 3.27614 9.50001 3 9.50001C2.72386 9.50001 2.5 9.72387 2.5 10V13C2.5 13.2762 2.72386 13.5 3 13.5H13C13.2761 13.5 13.5 13.2762 13.5 13V10C13.5 9.72387 13.2761 9.50001 13 9.50001C12.7239 9.50001 12.5 9.72387 12.5 10V12.5H3.5V10Z">
                                                                            </path>
                                                                        </svg><span>导入参数</span></div>
                                                                    <div>
                                                                        <div class="api-post-dropdown">
                                                                            <div class="api-post-dropdown-header"
                                                                                style="opacity: 1;">
                                                                                <div class="btn-import"><svg width="16"
                                                                                        height="16" viewBox="0 0 16 16"
                                                                                        fill="none"
                                                                                        xmlns="http://www.w3.org/2000/svg">
                                                                                        <path fill-rule="evenodd"
                                                                                            clip-rule="evenodd"
                                                                                            d="M3.5 10C3.5 9.72386 3.27614 9.5 3 9.5C2.72386 9.5 2.5 9.72386 2.5 10L2.5 13C2.5 13.2761 2.72386 13.5 3 13.5L13 13.5C13.2761 13.5 13.5 13.2761 13.5 13L13.5 10C13.5 9.72386 13.2761 9.5 13 9.5C12.7239 9.5 12.5 9.72386 12.5 10L12.5 12.5L3.5 12.5L3.5 10ZM3.60192 7.39863L7.5 3.50054L7.5 10C7.5 10.2761 7.72386 10.5 8 10.5C8.27614 10.5 8.5 10.2761 8.5 10L8.5 3.5003L12.3983 7.39863C12.5936 7.59389 12.9102 7.59389 13.1054 7.39863C13.3007 7.20337 13.3007 6.88678 13.1054 6.69152L8.35367 1.93976C8.15841 1.7445 7.84183 1.7445 7.64657 1.93976L2.89481 6.69152C2.69955 6.88678 2.69955 7.20336 2.89481 7.39863C3.09007 7.59389 3.40665 7.59389 3.60192 7.39863Z">
                                                                                        </path>
                                                                                    </svg><span>导出参数</span></div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div class="table-header-right">
                                                                    <div class="formtable-header-select api-select">
                                                                        <div class="api-select-selector">
                                                                            <div class="api-select-selector-value"
                                                                                style="color: var(--method3);">
                                                                                multipart/form-data</div>
                                                                            <div class="api-select-selector-icon"><svg
                                                                                    width="16" height="16"
                                                                                    viewBox="0 0 16 16" fill="none"
                                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                                    style="fill: var(--method3);">
                                                                                    <path fill-rule="evenodd"
                                                                                        clip-rule="evenodd"
                                                                                        d="M2.31021 5.64935C2.50388 5.45251 2.82045 5.44993 3.01729 5.6436L8.08159 10.6262L12.9768 5.6494C13.1705 5.45253 13.487 5.44991 13.6839 5.64356C13.8808 5.8372 13.8834 6.15377 13.6898 6.35064L8.79452 11.3275C8.4072 11.7212 7.77398 11.7264 7.38026 11.3391L2.31596 6.35643C2.11912 6.16277 2.11654 5.84619 2.31021 5.64935Z">
                                                                                    </path>
                                                                                </svg></div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div class="apipost-table-container">
                                                                <div>
                                                                    <table class="api-post-table">
                                                                        <thead>
                                                                            <tr>
                                                                                <td class="api-post-table-td-border"
                                                                                    style="width: 30px;"></td>
                                                                                <td class="api-post-table-td-border"
                                                                                    style="width: 41px;"><span></span>
                                                                                </td>
                                                                                <td class="api-post-table-td-border"
                                                                                    style="width: 200px;">
                                                                                    <span>参数名</span>
                                                                                    <div class="td-scale"
                                                                                        style="height: 115px; left: 198px;">
                                                                                    </div>
                                                                                </td>
                                                                                <td class="api-post-table-td-border"
                                                                                    style="width: 220px;">
                                                                                    <span>参数值</span>
                                                                                    <div class="td-scale"
                                                                                        style="height: 115px; left: 218px;">
                                                                                    </div>
                                                                                </td>
                                                                                <td class="api-post-table-td-border"
                                                                                    style="width: 56px;"><span>必填</span>
                                                                                    <div class="td-scale"
                                                                                        style="height: 115px; left: 54px;">
                                                                                    </div>
                                                                                </td>
                                                                                <td class="api-post-table-td-border"
                                                                                    style="width: 86px;"><span>类型</span>
                                                                                    <div class="td-scale"
                                                                                        style="height: 115px; left: 84px;">
                                                                                    </div>
                                                                                </td>
                                                                                <td class="api-post-table-td-border"
                                                                                    style="width: auto;">
                                                                                    <span>参数描述</span>
                                                                                </td>
                                                                                <td class="api-post-table-td-border"
                                                                                    style="width: 30px;"><span></span>
                                                                                </td>
                                                                                <td class="api-post-table-td-border"
                                                                                    style="width: 30px;"><span></span>
                                                                                </td>
                                                                            </tr>
                                                                        </thead>
                                                                        <tbody>
                                                                            <tr style="background: none;">
                                                                                <td class="api-post-table-td-border"
                                                                                    width="30px">
                                                                                    <div draggable="true"><svg
                                                                                            width="20" height="20"
                                                                                            viewBox="0 0 20 20"
                                                                                            fill="none"
                                                                                            xmlns="http://www.w3.org/2000/svg"
                                                                                            class="btn-sort">
                                                                                            <path fill-rule="evenodd"
                                                                                                clip-rule="evenodd"
                                                                                                d="M3 4.5C3 4.22386 3.22386 4 3.5 4H16.5C16.7761 4 17 4.22386 17 4.5C17 4.77614 16.7761 5 16.5 5H3.5C3.22386 5 3 4.77614 3 4.5ZM3 9.5C3 9.22386 3.22386 9 3.5 9H16.5C16.7761 9 17 9.22386 17 9.5C17 9.77614 16.7761 10 16.5 10H3.5C3.22386 10 3 9.77614 3 9.5ZM3.5 14C3.22386 14 3 14.2239 3 14.5C3 14.7761 3.22386 15 3.5 15H16.5C16.7761 15 17 14.7761 17 14.5C17 14.2239 16.7761 14 16.5 14H3.5Z">
                                                                                            </path>
                                                                                        </svg></div>
                                                                                </td>
                                                                                <td class="api-post-table-td-border">
                                                                                    <div class="api-post-switch api-post-switch-checked api-post-switch-default"
                                                                                        switch-type="radius">
                                                                                        <div class="cycle"></div>
                                                                                    </div>
                                                                                </td>
                                                                                <td class="api-post-table-td-border">
                                                                                    <div class="apipost-textbox">
                                                                                        <div class="api-textarea-wrapper"
                                                                                            style="height: 27px;">
                                                                                            <textarea spellcheck="false"
                                                                                                class="api-textarea"
                                                                                                placeholder="参数名"
                                                                                                style="height: 27px; line-height: 27px;">courseGuid</textarea><span
                                                                                                class="api-input-clear-icon"></span>
                                                                                        </div>
                                                                                        <div class="select-filetype api-select"
                                                                                            style="flex-shrink: 0;">
                                                                                            <div
                                                                                                class="api-select-selector">
                                                                                                <div
                                                                                                    class="api-select-selector-value">
                                                                                                    Text</div>
                                                                                                <div
                                                                                                    class="api-select-selector-icon">
                                                                                                    <svg width="16"
                                                                                                        height="16"
                                                                                                        viewBox="0 0 16 16"
                                                                                                        fill="none"
                                                                                                        xmlns="http://www.w3.org/2000/svg">
                                                                                                        <path
                                                                                                            fill-rule="evenodd"
                                                                                                            clip-rule="evenodd"
                                                                                                            d="M2.31021 5.64935C2.50388 5.45251 2.82045 5.44993 3.01729 5.6436L8.08159 10.6262L12.9768 5.6494C13.1705 5.45253 13.487 5.44991 13.6839 5.64356C13.8808 5.8372 13.8834 6.15377 13.6898 6.35064L8.79452 11.3275C8.4072 11.7212 7.77398 11.7264 7.38026 11.3391L2.31596 6.35643C2.11912 6.16277 2.11654 5.84619 2.31021 5.64935Z">
                                                                                                        </path>
                                                                                                    </svg>
                                                                                                </div>
                                                                                            </div>
                                                                                        </div>
                                                                                    </div>
                                                                                </td>
                                                                                <td class="api-post-table-td-border">
                                                                                    <div class="apipost-textbox">
                                                                                        <div class="api-textarea-wrapper"
                                                                                            style="height: 27px;">
                                                                                            <textarea spellcheck="false"
                                                                                                class="api-textarea"
                                                                                                placeholder="参数值，支持Mock字段变量"
                                                                                                style="height: 27px; line-height: 27px;">764</textarea><span
                                                                                                class="api-input-clear-icon"></span>
                                                                                        </div>
                                                                                    </div>
                                                                                </td>
                                                                                <td class="api-post-table-td-border">
                                                                                    <div class="api-post-switch api-post-switch-checked api-post-switch-default"
                                                                                        switch-type="radius">
                                                                                        <div class="cycle"></div>
                                                                                    </div>
                                                                                </td>
                                                                                <td class="api-post-table-td-border">
                                                                                    <div
                                                                                        class="select-datalist api-select">
                                                                                        <div
                                                                                            class="api-select-selector">
                                                                                            <div
                                                                                                class="api-select-selector-value">
                                                                                                Text</div>
                                                                                            <div
                                                                                                class="api-select-selector-icon">
                                                                                                <svg width="16"
                                                                                                    height="16"
                                                                                                    viewBox="0 0 16 16"
                                                                                                    fill="none"
                                                                                                    xmlns="http://www.w3.org/2000/svg">
                                                                                                    <path
                                                                                                        fill-rule="evenodd"
                                                                                                        clip-rule="evenodd"
                                                                                                        d="M2.31021 5.64935C2.50388 5.45251 2.82045 5.44993 3.01729 5.6436L8.08159 10.6262L12.9768 5.6494C13.1705 5.45253 13.487 5.44991 13.6839 5.64356C13.8808 5.8372 13.8834 6.15377 13.6898 6.35064L8.79452 11.3275C8.4072 11.7212 7.77398 11.7264 7.38026 11.3391L2.31596 6.35643C2.11912 6.16277 2.11654 5.84619 2.31021 5.64935Z">
                                                                                                    </path>
                                                                                                </svg>
                                                                                            </div>
                                                                                        </div>
                                                                                    </div>
                                                                                </td>
                                                                                <td class="api-post-table-td-border">
                                                                                    <div class="api-textarea-wrapper"
                                                                                        style="height: 27px;"><textarea
                                                                                            spellcheck="false"
                                                                                            class="api-textarea"
                                                                                            placeholder="参数描述,用于生成文档"
                                                                                            style="height: 27px; line-height: 27px;"></textarea><span
                                                                                            class="api-input-clear-icon"></span>
                                                                                    </div>
                                                                                </td>
                                                                                <td class="api-post-table-td-border">
                                                                                    <div class="api-post-drop-menu">
                                                                                        <div><svg width="16" height="16"
                                                                                                viewBox="0 0 16 16"
                                                                                                fill="none"
                                                                                                xmlns="http://www.w3.org/2000/svg"
                                                                                                class="btn-showparam">
                                                                                                <path
                                                                                                    fill-rule="evenodd"
                                                                                                    clip-rule="evenodd"
                                                                                                    d="M8.73943 2.70015C8.59019 2.61875 8.40981 2.61875 8.26057 2.70015L4.04416 5.00001L8.26057 7.29987C8.40981 7.38127 8.59019 7.38127 8.73943 7.29987L12.9558 5.00001L8.73943 2.70015ZM13.5 5.84228L9.21828 8.17777C9.1476 8.21632 9.0746 8.24878 9 8.27516V13.1577L13.2394 10.8453C13.4001 10.7577 13.5 10.5894 13.5 10.4064V5.84228ZM8 8.27516C7.9254 8.24878 7.8524 8.21632 7.78172 8.17777L3.5 5.84228V10.4064C3.5 10.5894 3.59994 10.7577 3.76057 10.8453L8 13.1577V8.27516ZM7.78172 1.82226C8.22944 1.57805 8.77056 1.57805 9.21828 1.82226L13.7183 4.2768C14.2002 4.53965 14.5 5.04473 14.5 5.59364V10.4064C14.5 10.9553 14.2002 11.4604 13.7183 11.7232L9.21828 14.1778C8.77056 14.422 8.22944 14.422 7.78172 14.1778L3.28172 11.7232C2.79983 11.4604 2.5 10.9553 2.5 10.4064V5.59364C2.5 5.04473 2.79983 4.53965 3.28172 4.2768L7.78172 1.82226Z">
                                                                                                </path>
                                                                                            </svg></div>
                                                                                    </div>
                                                                                </td>
                                                                                <td class="api-post-table-td-border">
                                                                                    <svg width="16" height="16"
                                                                                        viewBox="0 0 16 16" fill="none"
                                                                                        xmlns="http://www.w3.org/2000/svg"
                                                                                        class="btn-delete">
                                                                                        <path fill-rule="evenodd"
                                                                                            clip-rule="evenodd"
                                                                                            d="M6.5 2.33331H8.83333C9.21707 2.33331 9.55033 2.54946 9.71799 2.86665H5.61534C5.78301 2.54946 6.11626 2.33331 6.5 2.33331ZM8.83333 1.33331C9.77722 1.33331 10.5684 1.98717 10.7786 2.86665C10.7891 2.91055 10.7981 2.95502 10.8057 3H13.5C13.7761 3 14 3.22386 14 3.5C14 3.77614 13.7761 4 13.5 4H12.7333V4.23334V13C12.7333 13.5523 12.2856 14 11.7333 14H3.59998C3.04769 14 2.59998 13.5523 2.59998 13V4.23334V4H1.5C1.22386 4 1 3.77614 1 3.5C1 3.22386 1.22386 3 1.5 3H4.52765C4.53519 2.95502 4.54424 2.91055 4.55474 2.86665C4.76495 1.98717 5.55612 1.33331 6.5 1.33331H8.83333ZM11.7333 4.23334H3.59998V13H11.7333V4.23334ZM9.43335 5.76666C9.70949 5.76666 9.93335 5.99052 9.93335 6.26666V10.9667C9.93335 11.2428 9.70949 11.4667 9.43335 11.4667C9.15721 11.4667 8.93335 11.2428 8.93335 10.9667V6.26666C8.93335 5.99052 9.15721 5.76666 9.43335 5.76666ZM6.76672 6.26666C6.76672 5.99052 6.54287 5.76666 6.26672 5.76666C5.99058 5.76666 5.76672 5.99052 5.76672 6.26666V10.9667C5.76672 11.2428 5.99058 11.4667 6.26672 11.4667C6.54287 11.4667 6.76672 11.2428 6.76672 10.9667V6.26666Z">
                                                                                        </path>
                                                                                    </svg>
                                                                                </td>
                                                                            </tr>
                                                                            <tr style="background: none;">
                                                                                <td class="api-post-table-td-border"
                                                                                    width="30px">
                                                                                    <div draggable="true"><svg
                                                                                            width="20" height="20"
                                                                                            viewBox="0 0 20 20"
                                                                                            fill="none"
                                                                                            xmlns="http://www.w3.org/2000/svg"
                                                                                            class="btn-sort">
                                                                                            <path fill-rule="evenodd"
                                                                                                clip-rule="evenodd"
                                                                                                d="M3 4.5C3 4.22386 3.22386 4 3.5 4H16.5C16.7761 4 17 4.22386 17 4.5C17 4.77614 16.7761 5 16.5 5H3.5C3.22386 5 3 4.77614 3 4.5ZM3 9.5C3 9.22386 3.22386 9 3.5 9H16.5C16.7761 9 17 9.22386 17 9.5C17 9.77614 16.7761 10 16.5 10H3.5C3.22386 10 3 9.77614 3 9.5ZM3.5 14C3.22386 14 3 14.2239 3 14.5C3 14.7761 3.22386 15 3.5 15H16.5C16.7761 15 17 14.7761 17 14.5C17 14.2239 16.7761 14 16.5 14H3.5Z">
                                                                                            </path>
                                                                                        </svg></div>
                                                                                </td>
                                                                                <td class="api-post-table-td-border">
                                                                                    <div class="api-post-switch api-post-switch-checked api-post-switch-default"
                                                                                        switch-type="radius">
                                                                                        <div class="cycle"></div>
                                                                                    </div>
                                                                                </td>
                                                                                <td class="api-post-table-td-border">
                                                                                    <div class="apipost-textbox">
                                                                                        <div class="api-textarea-wrapper"
                                                                                            style="height: 27px;">
                                                                                            <textarea spellcheck="false"
                                                                                                class="api-textarea"
                                                                                                placeholder="参数名"
                                                                                                style="height: 27px; line-height: 27px;">videoGuid</textarea><span
                                                                                                class="api-input-clear-icon"></span>
                                                                                        </div>
                                                                                        <div class="select-filetype api-select"
                                                                                            style="flex-shrink: 0;">
                                                                                            <div
                                                                                                class="api-select-selector">
                                                                                                <div
                                                                                                    class="api-select-selector-value">
                                                                                                    Text</div>
                                                                                                <div
                                                                                                    class="api-select-selector-icon">
                                                                                                    <svg width="16"
                                                                                                        height="16"
                                                                                                        viewBox="0 0 16 16"
                                                                                                        fill="none"
                                                                                                        xmlns="http://www.w3.org/2000/svg">
                                                                                                        <path
                                                                                                            fill-rule="evenodd"
                                                                                                            clip-rule="evenodd"
                                                                                                            d="M2.31021 5.64935C2.50388 5.45251 2.82045 5.44993 3.01729 5.6436L8.08159 10.6262L12.9768 5.6494C13.1705 5.45253 13.487 5.44991 13.6839 5.64356C13.8808 5.8372 13.8834 6.15377 13.6898 6.35064L8.79452 11.3275C8.4072 11.7212 7.77398 11.7264 7.38026 11.3391L2.31596 6.35643C2.11912 6.16277 2.11654 5.84619 2.31021 5.64935Z">
                                                                                                        </path>
                                                                                                    </svg>
                                                                                                </div>
                                                                                            </div>
                                                                                        </div>
                                                                                    </div>
                                                                                </td>
                                                                                <td class="api-post-table-td-border">
                                                                                    <div class="apipost-textbox">
                                                                                        <div class="api-textarea-wrapper"
                                                                                            style="height: 27px;">
                                                                                            <textarea spellcheck="false"
                                                                                                class="api-textarea"
                                                                                                placeholder="参数值，支持Mock字段变量"
                                                                                                style="height: 27px; line-height: 27px;">{{videoGuid}}</textarea><span
                                                                                                class="api-input-clear-icon"></span>
                                                                                        </div>
                                                                                    </div>
                                                                                </td>
                                                                                <td class="api-post-table-td-border">
                                                                                    <div class="api-post-switch api-post-switch-checked api-post-switch-default"
                                                                                        switch-type="radius">
                                                                                        <div class="cycle"></div>
                                                                                    </div>
                                                                                </td>
                                                                                <td class="api-post-table-td-border">
                                                                                    <div
                                                                                        class="select-datalist api-select">
                                                                                        <div
                                                                                            class="api-select-selector">
                                                                                            <div
                                                                                                class="api-select-selector-value">
                                                                                                Text</div>
                                                                                            <div
                                                                                                class="api-select-selector-icon">
                                                                                                <svg width="16"
                                                                                                    height="16"
                                                                                                    viewBox="0 0 16 16"
                                                                                                    fill="none"
                                                                                                    xmlns="http://www.w3.org/2000/svg">
                                                                                                    <path
                                                                                                        fill-rule="evenodd"
                                                                                                        clip-rule="evenodd"
                                                                                                        d="M2.31021 5.64935C2.50388 5.45251 2.82045 5.44993 3.01729 5.6436L8.08159 10.6262L12.9768 5.6494C13.1705 5.45253 13.487 5.44991 13.6839 5.64356C13.8808 5.8372 13.8834 6.15377 13.6898 6.35064L8.79452 11.3275C8.4072 11.7212 7.77398 11.7264 7.38026 11.3391L2.31596 6.35643C2.11912 6.16277 2.11654 5.84619 2.31021 5.64935Z">
                                                                                                    </path>
                                                                                                </svg>
                                                                                            </div>
                                                                                        </div>
                                                                                    </div>
                                                                                </td>
                                                                                <td class="api-post-table-td-border">
                                                                                    <div class="api-textarea-wrapper"
                                                                                        style="height: 27px;"><textarea
                                                                                            spellcheck="false"
                                                                                            class="api-textarea"
                                                                                            placeholder="参数描述,用于生成文档"
                                                                                            style="height: 27px; line-height: 27px;"></textarea><span
                                                                                            class="api-input-clear-icon"></span>
                                                                                    </div>
                                                                                </td>
                                                                                <td class="api-post-table-td-border">
                                                                                    <div class="api-post-drop-menu">
                                                                                        <div><svg width="16" height="16"
                                                                                                viewBox="0 0 16 16"
                                                                                                fill="none"
                                                                                                xmlns="http://www.w3.org/2000/svg"
                                                                                                class="btn-showparam">
                                                                                                <path
                                                                                                    fill-rule="evenodd"
                                                                                                    clip-rule="evenodd"
                                                                                                    d="M8.73943 2.70015C8.59019 2.61875 8.40981 2.61875 8.26057 2.70015L4.04416 5.00001L8.26057 7.29987C8.40981 7.38127 8.59019 7.38127 8.73943 7.29987L12.9558 5.00001L8.73943 2.70015ZM13.5 5.84228L9.21828 8.17777C9.1476 8.21632 9.0746 8.24878 9 8.27516V13.1577L13.2394 10.8453C13.4001 10.7577 13.5 10.5894 13.5 10.4064V5.84228ZM8 8.27516C7.9254 8.24878 7.8524 8.21632 7.78172 8.17777L3.5 5.84228V10.4064C3.5 10.5894 3.59994 10.7577 3.76057 10.8453L8 13.1577V8.27516ZM7.78172 1.82226C8.22944 1.57805 8.77056 1.57805 9.21828 1.82226L13.7183 4.2768C14.2002 4.53965 14.5 5.04473 14.5 5.59364V10.4064C14.5 10.9553 14.2002 11.4604 13.7183 11.7232L9.21828 14.1778C8.77056 14.422 8.22944 14.422 7.78172 14.1778L3.28172 11.7232C2.79983 11.4604 2.5 10.9553 2.5 10.4064V5.59364C2.5 5.04473 2.79983 4.53965 3.28172 4.2768L7.78172 1.82226Z">
                                                                                                </path>
                                                                                            </svg></div>
                                                                                    </div>
                                                                                </td>
                                                                                <td class="api-post-table-td-border">
                                                                                    <svg width="16" height="16"
                                                                                        viewBox="0 0 16 16" fill="none"
                                                                                        xmlns="http://www.w3.org/2000/svg"
                                                                                        class="btn-delete">
                                                                                        <path fill-rule="evenodd"
                                                                                            clip-rule="evenodd"
                                                                                            d="M6.5 2.33331H8.83333C9.21707 2.33331 9.55033 2.54946 9.71799 2.86665H5.61534C5.78301 2.54946 6.11626 2.33331 6.5 2.33331ZM8.83333 1.33331C9.77722 1.33331 10.5684 1.98717 10.7786 2.86665C10.7891 2.91055 10.7981 2.95502 10.8057 3H13.5C13.7761 3 14 3.22386 14 3.5C14 3.77614 13.7761 4 13.5 4H12.7333V4.23334V13C12.7333 13.5523 12.2856 14 11.7333 14H3.59998C3.04769 14 2.59998 13.5523 2.59998 13V4.23334V4H1.5C1.22386 4 1 3.77614 1 3.5C1 3.22386 1.22386 3 1.5 3H4.52765C4.53519 2.95502 4.54424 2.91055 4.55474 2.86665C4.76495 1.98717 5.55612 1.33331 6.5 1.33331H8.83333ZM11.7333 4.23334H3.59998V13H11.7333V4.23334ZM9.43335 5.76666C9.70949 5.76666 9.93335 5.99052 9.93335 6.26666V10.9667C9.93335 11.2428 9.70949 11.4667 9.43335 11.4667C9.15721 11.4667 8.93335 11.2428 8.93335 10.9667V6.26666C8.93335 5.99052 9.15721 5.76666 9.43335 5.76666ZM6.76672 6.26666C6.76672 5.99052 6.54287 5.76666 6.26672 5.76666C5.99058 5.76666 5.76672 5.99052 5.76672 6.26666V10.9667C5.76672 11.2428 5.99058 11.4667 6.26672 11.4667C6.54287 11.4667 6.76672 11.2428 6.76672 10.9667V6.26666Z">
                                                                                        </path>
                                                                                    </svg>
                                                                                </td>
                                                                            </tr>
                                                                            <tr style="background: none;">
                                                                                <td class="api-post-table-td-border"
                                                                                    width="30px">
                                                                                    <div draggable="true"><svg
                                                                                            width="20" height="20"
                                                                                            viewBox="0 0 20 20"
                                                                                            fill="none"
                                                                                            xmlns="http://www.w3.org/2000/svg"
                                                                                            class="btn-sort">
                                                                                            <path fill-rule="evenodd"
                                                                                                clip-rule="evenodd"
                                                                                                d="M3 4.5C3 4.22386 3.22386 4 3.5 4H16.5C16.7761 4 17 4.22386 17 4.5C17 4.77614 16.7761 5 16.5 5H3.5C3.22386 5 3 4.77614 3 4.5ZM3 9.5C3 9.22386 3.22386 9 3.5 9H16.5C16.7761 9 17 9.22386 17 9.5C17 9.77614 16.7761 10 16.5 10H3.5C3.22386 10 3 9.77614 3 9.5ZM3.5 14C3.22386 14 3 14.2239 3 14.5C3 14.7761 3.22386 15 3.5 15H16.5C16.7761 15 17 14.7761 17 14.5C17 14.2239 16.7761 14 16.5 14H3.5Z">
                                                                                            </path>
                                                                                        </svg></div>
                                                                                </td>
                                                                                <td class="api-post-table-td-border">
                                                                                    <div class="api-post-switch api-post-switch-checked api-post-switch-default"
                                                                                        switch-type="radius">
                                                                                        <div class="cycle"></div>
                                                                                    </div>
                                                                                </td>
                                                                                <td class="api-post-table-td-border">
                                                                                    <div class="apipost-textbox">
                                                                                        <div class="api-textarea-wrapper"
                                                                                            style="height: 27px;">
                                                                                            <textarea spellcheck="false"
                                                                                                class="api-textarea"
                                                                                                placeholder="参数名"
                                                                                                style="height: 27px; line-height: 27px;"></textarea><span
                                                                                                class="api-input-clear-icon"></span>
                                                                                        </div>
                                                                                        <div class="select-filetype api-select"
                                                                                            style="flex-shrink: 0;">
                                                                                            <div
                                                                                                class="api-select-selector">
                                                                                                <div
                                                                                                    class="api-select-selector-value">
                                                                                                    Text</div>
                                                                                                <div
                                                                                                    class="api-select-selector-icon">
                                                                                                    <svg width="16"
                                                                                                        height="16"
                                                                                                        viewBox="0 0 16 16"
                                                                                                        fill="none"
                                                                                                        xmlns="http://www.w3.org/2000/svg">
                                                                                                        <path
                                                                                                            fill-rule="evenodd"
                                                                                                            clip-rule="evenodd"
                                                                                                            d="M2.31021 5.64935C2.50388 5.45251 2.82045 5.44993 3.01729 5.6436L8.08159 10.6262L12.9768 5.6494C13.1705 5.45253 13.487 5.44991 13.6839 5.64356C13.8808 5.8372 13.8834 6.15377 13.6898 6.35064L8.79452 11.3275C8.4072 11.7212 7.77398 11.7264 7.38026 11.3391L2.31596 6.35643C2.11912 6.16277 2.11654 5.84619 2.31021 5.64935Z">
                                                                                                        </path>
                                                                                                    </svg>
                                                                                                </div>
                                                                                            </div>
                                                                                        </div>
                                                                                    </div>
                                                                                </td>
                                                                                <td class="api-post-table-td-border">
                                                                                    <div class="apipost-textbox">
                                                                                        <div class="api-textarea-wrapper"
                                                                                            style="height: 27px;">
                                                                                            <textarea spellcheck="false"
                                                                                                class="api-textarea"
                                                                                                placeholder="参数值，支持Mock字段变量"
                                                                                                style="height: 27px; line-height: 27px;"></textarea><span
                                                                                                class="api-input-clear-icon"></span>
                                                                                        </div>
                                                                                    </div>
                                                                                </td>
                                                                                <td class="api-post-table-td-border">
                                                                                    <div class="api-post-switch api-post-switch-checked api-post-switch-default"
                                                                                        switch-type="radius">
                                                                                        <div class="cycle"></div>
                                                                                    </div>
                                                                                </td>
                                                                                <td class="api-post-table-td-border">
                                                                                    <div
                                                                                        class="select-datalist api-select">
                                                                                        <div
                                                                                            class="api-select-selector">
                                                                                            <div
                                                                                                class="api-select-selector-value">
                                                                                                Text</div>
                                                                                            <div
                                                                                                class="api-select-selector-icon">
                                                                                                <svg width="16"
                                                                                                    height="16"
                                                                                                    viewBox="0 0 16 16"
                                                                                                    fill="none"
                                                                                                    xmlns="http://www.w3.org/2000/svg">
                                                                                                    <path
                                                                                                        fill-rule="evenodd"
                                                                                                        clip-rule="evenodd"
                                                                                                        d="M2.31021 5.64935C2.50388 5.45251 2.82045 5.44993 3.01729 5.6436L8.08159 10.6262L12.9768 5.6494C13.1705 5.45253 13.487 5.44991 13.6839 5.64356C13.8808 5.8372 13.8834 6.15377 13.6898 6.35064L8.79452 11.3275C8.4072 11.7212 7.77398 11.7264 7.38026 11.3391L2.31596 6.35643C2.11912 6.16277 2.11654 5.84619 2.31021 5.64935Z">
                                                                                                    </path>
                                                                                                </svg>
                                                                                            </div>
                                                                                        </div>
                                                                                    </div>
                                                                                </td>
                                                                                <td class="api-post-table-td-border">
                                                                                    <div class="api-textarea-wrapper"
                                                                                        style="height: 27px;"><textarea
                                                                                            spellcheck="false"
                                                                                            class="api-textarea"
                                                                                            placeholder="参数描述,用于生成文档"
                                                                                            style="height: 27px; line-height: 27px;"></textarea><span
                                                                                            class="api-input-clear-icon"></span>
                                                                                    </div>
                                                                                </td>
                                                                                <td class="api-post-table-td-border">
                                                                                    <div class="api-post-drop-menu">
                                                                                        <div><svg width="16" height="16"
                                                                                                viewBox="0 0 16 16"
                                                                                                fill="none"
                                                                                                xmlns="http://www.w3.org/2000/svg"
                                                                                                class="btn-showparam">
                                                                                                <path
                                                                                                    fill-rule="evenodd"
                                                                                                    clip-rule="evenodd"
                                                                                                    d="M8.73943 2.70015C8.59019 2.61875 8.40981 2.61875 8.26057 2.70015L4.04416 5.00001L8.26057 7.29987C8.40981 7.38127 8.59019 7.38127 8.73943 7.29987L12.9558 5.00001L8.73943 2.70015ZM13.5 5.84228L9.21828 8.17777C9.1476 8.21632 9.0746 8.24878 9 8.27516V13.1577L13.2394 10.8453C13.4001 10.7577 13.5 10.5894 13.5 10.4064V5.84228ZM8 8.27516C7.9254 8.24878 7.8524 8.21632 7.78172 8.17777L3.5 5.84228V10.4064C3.5 10.5894 3.59994 10.7577 3.76057 10.8453L8 13.1577V8.27516ZM7.78172 1.82226C8.22944 1.57805 8.77056 1.57805 9.21828 1.82226L13.7183 4.2768C14.2002 4.53965 14.5 5.04473 14.5 5.59364V10.4064C14.5 10.9553 14.2002 11.4604 13.7183 11.7232L9.21828 14.1778C8.77056 14.422 8.22944 14.422 7.78172 14.1778L3.28172 11.7232C2.79983 11.4604 2.5 10.9553 2.5 10.4064V5.59364C2.5 5.04473 2.79983 4.53965 3.28172 4.2768L7.78172 1.82226Z">
                                                                                                </path>
                                                                                            </svg></div>
                                                                                    </div>
                                                                                </td>
                                                                                <td class="api-post-table-td-border">
                                                                                    <svg width="16" height="16"
                                                                                        viewBox="0 0 16 16" fill="none"
                                                                                        xmlns="http://www.w3.org/2000/svg"
                                                                                        class="btn-delete">
                                                                                        <path fill-rule="evenodd"
                                                                                            clip-rule="evenodd"
                                                                                            d="M6.5 2.33331H8.83333C9.21707 2.33331 9.55033 2.54946 9.71799 2.86665H5.61534C5.78301 2.54946 6.11626 2.33331 6.5 2.33331ZM8.83333 1.33331C9.77722 1.33331 10.5684 1.98717 10.7786 2.86665C10.7891 2.91055 10.7981 2.95502 10.8057 3H13.5C13.7761 3 14 3.22386 14 3.5C14 3.77614 13.7761 4 13.5 4H12.7333V4.23334V13C12.7333 13.5523 12.2856 14 11.7333 14H3.59998C3.04769 14 2.59998 13.5523 2.59998 13V4.23334V4H1.5C1.22386 4 1 3.77614 1 3.5C1 3.22386 1.22386 3 1.5 3H4.52765C4.53519 2.95502 4.54424 2.91055 4.55474 2.86665C4.76495 1.98717 5.55612 1.33331 6.5 1.33331H8.83333ZM11.7333 4.23334H3.59998V13H11.7333V4.23334ZM9.43335 5.76666C9.70949 5.76666 9.93335 5.99052 9.93335 6.26666V10.9667C9.93335 11.2428 9.70949 11.4667 9.43335 11.4667C9.15721 11.4667 8.93335 11.2428 8.93335 10.9667V6.26666C8.93335 5.99052 9.15721 5.76666 9.43335 5.76666ZM6.76672 6.26666C6.76672 5.99052 6.54287 5.76666 6.26672 5.76666C5.99058 5.76666 5.76672 5.99052 5.76672 6.26666V10.9667C5.76672 11.2428 5.99058 11.4667 6.26672 11.4667C6.54287 11.4667 6.76672 11.2428 6.76672 10.9667V6.26666Z">
                                                                                        </path>
                                                                                    </svg>
                                                                                </td>
                                                                            </tr>
                                                                        </tbody>
                                                                    </table>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="split-item" style="transform: translateY(0px);">
                                        <div class="splitbar"></div>
                                    </div>
                                    <div class="scale-item" style="flex: 1 1 0%;">
                                        <div class="api-response-area" style="display: block;">
                                            <div class="api-post-tabs api_send_tabs api_send_tabs_mini">
                                                <div class="api-post-tabs-header">
                                                    <div class="api-post-tabs-header-content api-send-headers">
                                                        <div>
                                                            <div class="api-post-tabs-headitem resp-main-tab disable">
                                                                实时响应</div>
                                                            <div class="api-post-tabs-headitem resp-main-tab disable">
                                                                请求头(&thinsp;尚未请求&thinsp;)</div>
                                                            <div class="api-post-tabs-headitem resp-main-tab disable">
                                                                响应头(&thinsp;尚未请求&thinsp;)</div>
                                                            <div class="api-post-tabs-headitem resp-main-tab disable">
                                                                Cookie(&thinsp;尚未请求&thinsp;)</div>
                                                            <div class="api-post-tabs-headitem active resp-main-tab">
                                                                成功响应示例</div>
                                                            <div class="api-post-tabs-headitem resp-main-tab">错误响应示例
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="mini-header-content">
                                                        <div class="api-select">
                                                            <div class="api-select-selector">
                                                                <div class="api-select-selector-value">成功响应示例</div>
                                                                <div class="api-select-selector-icon"><svg width="16"
                                                                        height="16" viewBox="0 0 16 16" fill="none"
                                                                        xmlns="http://www.w3.org/2000/svg">
                                                                        <path fill-rule="evenodd" clip-rule="evenodd"
                                                                            d="M2.31021 5.64935C2.50388 5.45251 2.82045 5.44993 3.01729 5.6436L8.08159 10.6262L12.9768 5.6494C13.1705 5.45253 13.487 5.44991 13.6839 5.64356C13.8808 5.8372 13.8834 6.15377 13.6898 6.35064L8.79452 11.3275C8.4072 11.7212 7.77398 11.7264 7.38026 11.3391L2.31596 6.35643C2.11912 6.16277 2.11654 5.84619 2.31021 5.64935Z">
                                                                        </path>
                                                                    </svg></div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="api-post-tabs-content">
                                                    <div>
                                                        <div class="response-example">
                                                            <div class="response-example-header"
                                                                style="user-select: none;">
                                                                <div class="button"><svg width="16" height="16"
                                                                        viewBox="0 0 16 16" fill="none"
                                                                        xmlns="http://www.w3.org/2000/svg">
                                                                        <path fill-rule="evenodd" clip-rule="evenodd"
                                                                            d="M12.3999 5.39823L8.57666 9.22148V1.50665C8.57666 1.23051 8.3528 1.00665 8.07666 1.00665C7.80052 1.00665 7.57666 1.23051 7.57666 1.50665V9.37138L3.60351 5.39823C3.40824 5.20297 3.09166 5.20297 2.8964 5.39823C2.70114 5.59349 2.70114 5.91007 2.8964 6.10533L7.64816 10.8571C7.84342 11.0524 8.16 11.0524 8.35527 10.8571L13.107 6.10533C13.3023 5.91007 13.3023 5.59349 13.107 5.39823C12.9118 5.20297 12.5952 5.20297 12.3999 5.39823ZM3.5 10C3.5 9.72387 3.27614 9.50001 3 9.50001C2.72386 9.50001 2.5 9.72387 2.5 10V13C2.5 13.2762 2.72386 13.5 3 13.5H13C13.2761 13.5 13.5 13.2762 13.5 13V10C13.5 9.72387 13.2761 9.50001 13 9.50001C12.7239 9.50001 12.5 9.72387 12.5 10V12.5H3.5V10Z">
                                                                        </path>
                                                                    </svg><span>从现有响应导入</span></div>
                                                                <div class="button"><svg width="16" height="16"
                                                                        viewBox="0 0 16 16" fill="none"
                                                                        xmlns="http://www.w3.org/2000/svg">
                                                                        <path fill-rule="evenodd" clip-rule="evenodd"
                                                                            d="M3.5 10C3.5 9.72386 3.27614 9.5 3 9.5C2.72386 9.5 2.5 9.72386 2.5 10L2.5 13C2.5 13.2761 2.72386 13.5 3 13.5L13 13.5C13.2761 13.5 13.5 13.2761 13.5 13L13.5 10C13.5 9.72386 13.2761 9.5 13 9.5C12.7239 9.5 12.5 9.72386 12.5 10L12.5 12.5L3.5 12.5L3.5 10ZM3.60192 7.39863L7.5 3.50054L7.5 10C7.5 10.2761 7.72386 10.5 8 10.5C8.27614 10.5 8.5 10.2761 8.5 10L8.5 3.5003L12.3983 7.39863C12.5936 7.59389 12.9102 7.59389 13.1054 7.39863C13.3007 7.20337 13.3007 6.88678 13.1054 6.69152L8.35367 1.93976C8.15841 1.7445 7.84183 1.7445 7.64657 1.93976L2.89481 6.69152C2.69955 6.88678 2.69955 7.20336 2.89481 7.39863C3.09007 7.59389 3.40665 7.59389 3.60192 7.39863Z">
                                                                        </path>
                                                                    </svg><span>提取字段和描述</span></div>
                                                                <div class="button"><svg width="16" height="16"
                                                                        viewBox="0 0 16 16" fill="none"
                                                                        xmlns="http://www.w3.org/2000/svg">
                                                                        <path fill-rule="evenodd" clip-rule="evenodd"
                                                                            d="M9 2.10001C9 1.82386 8.77614 1.60001 8.5 1.60001C8.22386 1.60001 8 1.82386 8 2.10001V2.20001H7.69995C7.42381 2.20001 7.19995 2.42387 7.19995 2.70001C7.19995 2.97615 7.42381 3.20001 7.69995 3.20001H8V3.50001C8 3.77615 8.22386 4.00001 8.5 4.00001C8.77614 4.00001 9 3.77615 9 3.50001V3.20001H9.09995C9.37609 3.20001 9.59995 2.97615 9.59995 2.70001C9.59995 2.42387 9.37609 2.20001 9.09995 2.20001H9V2.10001ZM10.0465 4.53935C9.85121 4.73461 9.85121 5.05119 10.0465 5.24645C10.2417 5.44172 10.5583 5.44172 10.7536 5.24645L11.6465 4.35356C11.8417 4.1583 11.8417 3.84171 11.6465 3.64645C11.4512 3.45119 11.1346 3.45119 10.9394 3.64645L10.0465 4.53935ZM2.04647 12.5393C1.85121 12.7346 1.85121 13.0512 2.04647 13.2465C2.24173 13.4417 2.55832 13.4417 2.75358 13.2465L9.24647 6.75356C9.44173 6.5583 9.44173 6.24171 9.24647 6.04645C9.05121 5.85119 8.73463 5.85119 8.53936 6.04645L2.04647 12.5393ZM11.2 8.29999C11.2 8.02385 11.4238 7.79999 11.7 7.79999H12V7.70001C12 7.42387 12.2239 7.20001 12.5 7.20001C12.7761 7.20001 13 7.42387 13 7.70001V7.79999H13.1C13.3761 7.79999 13.6 8.02385 13.6 8.29999C13.6 8.57613 13.3761 8.79999 13.1 8.79999H13V9.10001C13 9.37616 12.7761 9.60001 12.5 9.60001C12.2239 9.60001 12 9.37615 12 9.10001V8.79999H11.7C11.4238 8.79999 11.2 8.57613 11.2 8.29999ZM3.19995 5.10001C3.19995 4.82386 3.42381 4.60001 3.69995 4.60001H4V4.5C4 4.22386 4.22386 4 4.5 4C4.77614 4 5 4.22386 5 4.5V4.60001H5.09995C5.37609 4.60001 5.59995 4.82386 5.59995 5.10001C5.59995 5.37615 5.37609 5.60001 5.09995 5.60001H5V5.9C5 6.17614 4.77614 6.4 4.5 6.4C4.22386 6.4 4 6.17614 4 5.9V5.60001H3.69995C3.42381 5.60001 3.19995 5.37615 3.19995 5.10001Z">
                                                                        </path>
                                                                    </svg><span>美化</span></div>
                                                                <div class="button"><svg width="16" height="16"
                                                                        viewBox="0 0 16 16" fill="none"
                                                                        xmlns="http://www.w3.org/2000/svg">
                                                                        <path fill-rule="evenodd" clip-rule="evenodd"
                                                                            d="M13.6603 3.62538C13.6629 3.90151 13.4411 4.12744 13.165 4.13001L7.42111 4.18355C7.14498 4.18612 6.91904 3.96436 6.91647 3.68823C6.9139 3.4121 7.13566 3.18617 7.41179 3.18359L13.1557 3.13006C13.4318 3.12748 13.6577 3.34925 13.6603 3.62538ZM5.36141 3.62894C5.3673 3.90502 5.14827 4.1336 4.87219 4.13949L2.81071 4.18346C2.53463 4.18935 2.30605 3.97031 2.30016 3.69423C2.29428 3.41815 2.51331 3.18957 2.78939 3.18368L4.85086 3.13971C5.12694 3.13382 5.35552 3.35286 5.36141 3.62894ZM13.6603 8.04933C13.6617 8.32547 13.439 8.55048 13.1629 8.55191L2.80263 8.60544C2.5265 8.60687 2.30148 8.38417 2.30006 8.10803C2.29863 7.83189 2.52133 7.60688 2.79747 7.60546L13.1577 7.55192C13.4339 7.5505 13.6589 7.77319 13.6603 8.04933ZM2.30005 12.5808C2.30005 12.3047 2.52391 12.0808 2.80005 12.0808H4.75517C5.03132 12.0808 5.25517 12.3047 5.25517 12.5808C5.25517 12.8569 5.03132 13.0808 4.75517 13.0808H2.80005C2.52391 13.0808 2.30005 12.8569 2.30005 12.5808ZM6.91645 12.5808C6.91645 12.3047 7.14031 12.0808 7.41645 12.0808H13.0649C13.3411 12.0808 13.5649 12.3047 13.5649 12.5808C13.5649 12.8569 13.3411 13.0808 13.0649 13.0808H7.41645C7.14031 13.0808 6.91645 12.8569 6.91645 12.5808Z">
                                                                        </path>
                                                                    </svg><span>简化</span></div>
                                                            </div>
                                                            <div class="Response_scale"
                                                                style="height: calc(100% - 25px);">
                                                                <div class="apipost-scale horizontal"
                                                                    style="height: 100%;">
                                                                    <div class="scale-item" style="flex: 1 1 0%;">
                                                                        <section
                                                                            style="display: flex; position: relative; text-align: initial; width: 100%; height: 100%;">
                                                                            <div style="width: 100%; --codelens-font-features_ee1f62:&quot;liga&quot; off, &quot;calt&quot; off;"
                                                                                data-keybinding-context="2"
                                                                                data-mode-id="json">
                                                                                <div class="monaco-editor no-user-select  showUnused showDeprecated vs-dark"
                                                                                    role="code"
                                                                                    data-uri="inmemory://model/2"
                                                                                    style="width: 764px; height: 246px;">
                                                                                    <div data-mprt="3"
                                                                                        class="overflow-guard"
                                                                                        style="width: 764px; height: 246px;">
                                                                                        <div class="margin"
                                                                                            role="presentation"
                                                                                            aria-hidden="true"
                                                                                            style="position: absolute; transform: translate3d(0px, 0px, 0px); contain: strict; top: 0px; height: 246px; width: 59px;">
                                                                                            <div class="glyph-margin"
                                                                                                style="left: 0px; width: 0px; height: 246px;">
                                                                                            </div>
                                                                                            <div class="margin-view-zones"
                                                                                                role="presentation"
                                                                                                aria-hidden="true"
                                                                                                style="position: absolute;">
                                                                                            </div>
                                                                                            <div class="margin-view-overlays"
                                                                                                role="presentation"
                                                                                                aria-hidden="true"
                                                                                                style="position: absolute; width: 59px; font-family: Consolas, &quot;Courier New&quot;, monospace; font-weight: normal; font-size: 12px; font-feature-settings: &quot;liga&quot; 0, &quot;calt&quot; 0; line-height: 12px; letter-spacing: 0px; height: 246px;">
                                                                                                <div
                                                                                                    style="position:absolute;top:0px;width:100%;height:12px;">
                                                                                                    <div class="current-line current-line-margin-both"
                                                                                                        style="width:59px; height:12px;">
                                                                                                    </div>
                                                                                                    <div class="active-line-number line-numbers"
                                                                                                        style="left:0px;width:33px;">
                                                                                                        1</div>
                                                                                                </div>
                                                                                            </div>
                                                                                        </div>
                                                                                        <div class="monaco-scrollable-element editor-scrollable vs-dark"
                                                                                            role="presentation"
                                                                                            data-mprt="5"
                                                                                            style="position: absolute; overflow: hidden; left: 59px; height: 246px; width: 705px;">
                                                                                            <div class="lines-content monaco-editor-background"
                                                                                                style="position: absolute; overflow: hidden; width: 1e+06px; height: 1e+06px; transform: translate3d(0px, 0px, 0px); contain: strict; top: 0px; left: 0px;">
                                                                                                <div class="view-overlays"
                                                                                                    role="presentation"
                                                                                                    aria-hidden="true"
                                                                                                    style="position: absolute; height: 0px; width: 705px;">
                                                                                                    <div
                                                                                                        style="position:absolute;top:0px;width:100%;height:12px;">
                                                                                                        <div class="current-line"
                                                                                                            style="width:705px; height:12px;">
                                                                                                        </div>
                                                                                                    </div>
                                                                                                </div>
                                                                                                <div role="presentation"
                                                                                                    aria-hidden="true"
                                                                                                    class="view-rulers">
                                                                                                </div>
                                                                                                <div class="view-zones"
                                                                                                    role="presentation"
                                                                                                    aria-hidden="true"
                                                                                                    style="position: absolute;">
                                                                                                </div>
                                                                                                <div class="view-lines monaco-mouse-cursor-text"
                                                                                                    role="presentation"
                                                                                                    aria-hidden="true"
                                                                                                    data-mprt="7"
                                                                                                    style="position: absolute; font-family: Consolas, &quot;Courier New&quot;, monospace; font-weight: normal; font-size: 12px; font-feature-settings: &quot;liga&quot; 0, &quot;calt&quot; 0; line-height: 12px; letter-spacing: 0px; width: 705px; height: 246px;">
                                                                                                    <div style="top:0px;height:12px;"
                                                                                                        class="view-line">
                                                                                                        <span><span></span></span>
                                                                                                    </div>
                                                                                                </div>
                                                                                                <div data-mprt="1"
                                                                                                    class="contentWidgets"
                                                                                                    style="position: absolute; top: 0px;">
                                                                                                </div>
                                                                                                <div role="presentation"
                                                                                                    aria-hidden="true"
                                                                                                    class="cursors-layer cursor-line-style cursor-solid">
                                                                                                    <div class="cursor monaco-mouse-cursor-text "
                                                                                                        style="height: 12px; top: 0px; left: 0px; font-family: Consolas, &quot;Courier New&quot;, monospace; font-weight: normal; font-size: 12px; font-feature-settings: &quot;liga&quot; 0, &quot;calt&quot; 0; line-height: 12px; letter-spacing: 0px; display: block; visibility: hidden; width: 2px;">
                                                                                                    </div>
                                                                                                </div>
                                                                                            </div>
                                                                                            <div role="presentation"
                                                                                                aria-hidden="true"
                                                                                                class="invisible scrollbar horizontal"
                                                                                                style="position: absolute; width: 691px; height: 12px; left: 0px; bottom: 0px;">
                                                                                                <div class="slider"
                                                                                                    style="position: absolute; top: 0px; left: 0px; height: 12px; transform: translate3d(0px, 0px, 0px); contain: strict; width: 691px;">
                                                                                                </div>
                                                                                            </div><canvas
                                                                                                class="decorationsOverviewRuler"
                                                                                                aria-hidden="true"
                                                                                                width="14" height="246"
                                                                                                style="position: absolute; transform: translate3d(0px, 0px, 0px); contain: strict; top: 0px; right: 0px; width: 14px; height: 246px; display: block;"></canvas>
                                                                                            <div role="presentation"
                                                                                                aria-hidden="true"
                                                                                                class="invisible scrollbar vertical"
                                                                                                style="position: absolute; width: 14px; height: 246px; right: 0px; top: 0px;">
                                                                                                <div class="slider"
                                                                                                    style="position: absolute; top: 0px; left: 0px; width: 14px; transform: translate3d(0px, 0px, 0px); contain: strict; height: 246px;">
                                                                                                </div>
                                                                                            </div>
                                                                                        </div>
                                                                                        <div role="presentation"
                                                                                            aria-hidden="true"
                                                                                            style="width: 764px;"></div>
                                                                                        <textarea data-mprt="6"
                                                                                            class="inputarea monaco-mouse-cursor-text"
                                                                                            wrap="off" autocorrect="off"
                                                                                            autocapitalize="off"
                                                                                            autocomplete="off"
                                                                                            spellcheck="false"
                                                                                            aria-label="Editor content;Press Alt+F1 for Accessibility Options."
                                                                                            tabindex="0" role="textbox"
                                                                                            aria-roledescription="editor"
                                                                                            aria-multiline="true"
                                                                                            aria-haspopup="false"
                                                                                            aria-autocomplete="both"
                                                                                            style="font-family: Consolas, &quot;Courier New&quot;, monospace; font-weight: normal; font-size: 12px; font-feature-settings: &quot;liga&quot; 0, &quot;calt&quot; 0; line-height: 12px; letter-spacing: 0px; top: 0px; left: 59px; width: 1px; height: 1px;"></textarea>
                                                                                        <div style="position: absolute; top: 0px; left: 0px; width: 0px; height: 0px;"
                                                                                            class="monaco-editor-background textAreaCover line-numbers">
                                                                                        </div>
                                                                                        <div data-mprt="4"
                                                                                            class="overlayWidgets"
                                                                                            style="width: 764px;">
                                                                                            <div class="accessibilityHelpWidget"
                                                                                                role="dialog"
                                                                                                aria-hidden="true"
                                                                                                widgetid="editor.contrib.accessibilityHelpWidget"
                                                                                                style="display: none; position: absolute;">
                                                                                                <div role="document">
                                                                                                </div>
                                                                                            </div>
                                                                                            <div widgetid="editor.contrib.quickInputWidget"
                                                                                                style="position: absolute; top: 0px; right: 50%;">
                                                                                            </div>
                                                                                        </div>
                                                                                        <div data-mprt="8"
                                                                                            class="minimap slider-mouseover"
                                                                                            role="presentation"
                                                                                            aria-hidden="true"
                                                                                            style="position: absolute; left: 0px; width: 0px; height: 246px;">
                                                                                            <div class="minimap-shadow-hidden"
                                                                                                style="height: 246px;">
                                                                                            </div><canvas width="0"
                                                                                                height="246"
                                                                                                style="position: absolute; left: 0px; width: 0px; height: 246px;"></canvas><canvas
                                                                                                class="minimap-decorations-layer"
                                                                                                width="0" height="246"
                                                                                                style="position: absolute; left: 0px; width: 0px; height: 246px;"></canvas>
                                                                                            <div class="minimap-slider"
                                                                                                style="position: absolute; transform: translate3d(0px, 0px, 0px); contain: strict; width: 0px;">
                                                                                                <div class="minimap-slider-horizontal"
                                                                                                    style="position: absolute; width: 0px; height: 0px;">
                                                                                                </div>
                                                                                            </div>
                                                                                        </div>
                                                                                    </div>
                                                                                    <div data-mprt="2"
                                                                                        class="overflowingContentWidgets">
                                                                                        <div class="monaco-editor rename-box"
                                                                                            widgetid="__renameInputWidget"
                                                                                            style="background-color: rgb(37, 37, 38); box-shadow: rgba(0, 0, 0, 0.36) 0px 0px 8px 2px; color: rgb(204, 204, 204); position: absolute; display: none; visibility: hidden; max-width: 150px;">
                                                                                            <input class="rename-input"
                                                                                                type="text"
                                                                                                aria-label="Rename input. Type new name and press Enter to commit."
                                                                                                style="font-family: Consolas, &quot;Courier New&quot;, monospace; font-weight: normal; font-size: 12px; background-color: rgb(60, 60, 60); border-width: 0px; border-style: none;">
                                                                                            <div class="rename-label"
                                                                                                style="font-size: 9.6px;">
                                                                                                Enter to Rename,
                                                                                                Shift+Enter to Preview
                                                                                            </div>
                                                                                        </div>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                        </section>
                                                                    </div>
                                                                    <div class="split-item"
                                                                        style="transform: translateX(0px);">
                                                                        <div class="splitbar"></div>
                                                                    </div>
                                                                    <div class="scale-item put_away"
                                                                        style="width: 40px;">
                                                                        <div
                                                                            style="-webkit-writing-mode: vertical-rl; letter-spacing: 4px; cursor: default; user-select: none;">
                                                                            字段描述</div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="apis_footer" v-if="false">
                        <div class="apipost-scale vertical scale-container">
                            <div class="split-item" style="transform: translateY(0px);">
                                <div class="splitbar"></div>
                            </div>
                            <div class="scale-item" style="height: 1px;">
                                <div class="apis_foot_head">
                                    <div class="apis_foot_head-title"><svg width="16" height="16" viewBox="0 0 16 16"
                                            fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path fill-rule="evenodd" clip-rule="evenodd"
                                                d="M12.4 3.39999H3.59998C3.04769 3.39999 2.59998 3.84771 2.59998 4.39999V11.6C2.59998 12.1523 3.04769 12.6 3.59998 12.6H12.4C12.9523 12.6 13.4 12.1523 13.4 11.6V4.39999C13.4 3.84771 12.9523 3.39999 12.4 3.39999ZM3.59998 2.39999C2.49541 2.39999 1.59998 3.29542 1.59998 4.39999V11.6C1.59998 12.7046 2.49541 13.6 3.59998 13.6H12.4C13.5045 13.6 14.4 12.7046 14.4 11.6V4.39999C14.4 3.29542 13.5045 2.39999 12.4 2.39999H3.59998ZM5.41831 7.86275L3.50912 5.95356L4.21622 5.24645L6.47897 7.50919L6.83252 7.86275L6.47897 8.2163L4.21622 10.479L3.50912 9.77194L5.41831 7.86275ZM8 8H12V7H8V8Z">
                                            </path>
                                        </svg><span>控制台</span></div>
                                    <div class="apis_foot_head-right">
                                        <div class="more-btn"><svg width="16" height="16" viewBox="0 0 16 16"
                                                fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path fill-rule="evenodd" clip-rule="evenodd"
                                                    d="M12.5112 5.62316L7.90887 2.96602L5.73579 6.7299L10.3499 9.36655L12.5112 5.62316ZM4.83903 6.21747L4.86754 6.23376L7.04285 2.46602C7.31899 1.98773 7.93058 1.82385 8.40887 2.09999L13.0112 4.75713C13.4895 5.03328 13.6533 5.64487 13.3772 6.12316L11.2182 9.86269L11.239 9.87461L10.7429 10.7429L10.7182 10.7287L9.34863 13.1008C9.27921 13.2211 9.18858 13.3215 9.08419 13.4H13.9C14.1761 13.4 14.4 13.6238 14.4 13.9C14.4 14.1761 14.1761 14.4 13.9 14.4H2.09998C1.82383 14.4 1.59998 14.1761 1.59998 13.9C1.59998 13.6238 1.82383 13.4 2.09998 13.4H7.86674L3.3803 10.8097C2.90201 10.5336 2.73813 9.922 3.01428 9.44371L4.36754 7.09979L4.3429 7.08571L4.83903 6.21747ZM8.48261 12.6008L9.84993 10.2326L5.23579 7.59593L3.8803 9.94371L8.48261 12.6008Z">
                                                </path>
                                            </svg><span>清除</span></div>
                                        <div class="more-btn"><svg width="16" height="16" viewBox="0 0 16 16"
                                                fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path fill-rule="evenodd" clip-rule="evenodd"
                                                    d="M13 3H3L3 13H13V3ZM3 2C2.44772 2 2 2.44772 2 3V13C2 13.5523 2.44772 14 3 14H13C13.5523 14 14 13.5523 14 13V3C14 2.44772 13.5523 2 13 2H3ZM5.52518 5.38369C5.72045 5.18843 6.03703 5.18843 6.23229 5.38369L8.14143 7.29283L9.90914 5.52512C10.1044 5.32986 10.421 5.32986 10.6162 5.52512C10.8115 5.72039 10.8115 6.03697 10.6162 6.23223L8.84854 7.99994L10.6164 9.76775C10.8116 9.96302 10.8116 10.2796 10.6164 10.4749C10.4211 10.6701 10.1045 10.6701 9.90925 10.4749L8.14143 8.70705L6.23219 10.6163C6.03692 10.8116 5.72034 10.8116 5.52508 10.6163C5.32982 10.421 5.32982 10.1044 5.52508 9.90918L7.43433 7.99994L5.52518 6.0908C5.32992 5.89553 5.32992 5.57895 5.52518 5.38369Z">
                                                </path>
                                            </svg><span>关闭</span></div>
                                    </div>
                                </div>
                                <div class="apis_foot_cont">
                                    <div class="apt_console"></div>
                                </div>
                            </div>
                        </div>
                        <div class="apis_footer_container" v-if="false">
                            <div class="apis_foot_bars">
                                <div class="footer_l">
                                    <div class="btn-menu delay-color-bgcolor"><svg width="16" height="16"
                                            viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path fill-rule="evenodd" clip-rule="evenodd"
                                                d="M2.69995 3.39999C2.69995 2.57157 3.37152 1.89999 4.19995 1.89999H14V2.89999H4.19995C3.92381 2.89999 3.69995 3.12385 3.69995 3.39999V4.35999V5.39999C3.69995 5.67614 3.92381 5.89999 4.19995 5.89999H14V6.39983H14.1V12.6C14.1 13.4284 13.4284 14.1 12.6 14.1H4.19995C3.37153 14.1 2.69995 13.4284 2.69995 12.6V5.39999V4.35999V3.39999ZM3.69995 6.81464V12.6C3.69995 12.8761 3.92381 13.1 4.19995 13.1H12.6C12.8761 13.1 13.1 12.8761 13.1 12.6V6.89999H4.19995C4.02463 6.89999 3.85634 6.86992 3.69995 6.81464ZM5.59998 4.29999C5.59998 4.02385 5.82383 3.79999 6.09998 3.79999L12.87 3.79999C13.1461 3.79999 13.37 4.02385 13.37 4.29999C13.37 4.57613 13.1461 4.79999 12.87 4.79999L6.09998 4.79999C5.82383 4.79999 5.59998 4.57613 5.59998 4.29999Z">
                                            </path>
                                        </svg><span class="name">帮助</span></div>
                                    <div><span>
                                            <div class="btn-menu delay-color-bgcolor"><svg width="16" height="16"
                                                    viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path fill-rule="evenodd" clip-rule="evenodd"
                                                        d="M2.59998 2.60001H13.4L13.4 13.4L2.59998 13.4V2.60001ZM1.59998 2.60001C1.59998 2.04772 2.04769 1.60001 2.59998 1.60001H13.4C13.9523 1.60001 14.4 2.04772 14.4 2.60001V13.4C14.4 13.9523 13.9523 14.4 13.4 14.4H2.59998C2.04769 14.4 1.59998 13.9523 1.59998 13.4V2.60001ZM4.80005 11.2V4.79999H5.6846L7.99138 10.2588H8.01739L10.3155 4.79999H11.2V11.2H10.4889V6.10867H10.4629L8.32092 11.2H7.67918L5.53718 6.10867H5.51116V11.2H4.80005Z">
                                                    </path>
                                                </svg><span class="name">内置&thinsp;Mock&thinsp;字段变量</span></div>
                                        </span></div>
                                    <div class="btn-menu delay-color-bgcolor"><svg width="16" height="17"
                                            viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg"
                                            class="btnOk">
                                            <path fill-rule="evenodd" clip-rule="evenodd"
                                                d="M15 8.5C15 12.366 11.866 15.5 8 15.5C4.13401 15.5 1 12.366 1 8.5C1 4.63401 4.13401 1.5 8 1.5C11.866 1.5 15 4.63401 15 8.5ZM16 8.5C16 12.9183 12.4183 16.5 8 16.5C3.58172 16.5 0 12.9183 0 8.5C0 4.08172 3.58172 0.5 8 0.5C12.4183 0.5 16 4.08172 16 8.5ZM11.6818 6.00017C11.7661 5.99734 11.8479 6.02924 11.9093 6.08882C11.9708 6.14828 12.0069 6.23056 12.0097 6.31752C12.0124 6.40448 11.9816 6.489 11.9239 6.55247L7.49758 11.4297C7.43762 11.4961 7.35358 11.5336 7.26568 11.5333C7.19096 11.5335 7.1186 11.5063 7.06143 11.4566L4.64273 9.35901C4.55273 9.28465 4.50881 9.16579 4.52799 9.04845C4.54717 8.93111 4.62644 8.8337 4.7351 8.79394C4.84376 8.75418 4.96475 8.77831 5.05125 8.85699L7.23963 10.7549L11.4604 6.1039C11.5179 6.04033 11.5976 6.003 11.6818 6.00017Z">
                                            </path>
                                        </svg>
                                        <li>自动选择代理</li>
                                    </div>
                                </div>
                                <div class="footer_r">
                                    <div><span>
                                            <div class="btn-menu delay-color-bgcolor"><svg width="16" height="16"
                                                    viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path fill-rule="evenodd" clip-rule="evenodd"
                                                        d="M6 1.5C6.27614 1.5 6.5 1.72386 6.5 2V6.5H2C1.72386 6.5 1.5 6.27614 1.5 6C1.5 5.72386 1.72386 5.5 2 5.5H5.5V2C5.5 1.72386 5.72386 1.5 6 1.5Z">
                                                    </path>
                                                    <path fill-rule="evenodd" clip-rule="evenodd"
                                                        d="M1.5 10C1.5 9.72386 1.72386 9.5 2 9.5H6.5V14C6.5 14.2761 6.27614 14.5 6 14.5C5.72386 14.5 5.5 14.2761 5.5 14V10.5H2C1.72386 10.5 1.5 10.2761 1.5 10Z">
                                                    </path>
                                                    <path fill-rule="evenodd" clip-rule="evenodd"
                                                        d="M10 1.5C10.2761 1.5 10.5 1.72386 10.5 2V5.5H14C14.2761 5.5 14.5 5.72386 14.5 6C14.5 6.27614 14.2761 6.5 14 6.5H9.5V2C9.5 1.72386 9.72386 1.5 10 1.5Z">
                                                    </path>
                                                    <path fill-rule="evenodd" clip-rule="evenodd"
                                                        d="M9.5 9.5H14C14.2761 9.5 14.5 9.72386 14.5 10C14.5 10.2761 14.2761 10.5 14 10.5H10.5V14C10.5 14.2761 10.2761 14.5 10 14.5C9.72386 14.5 9.5 14.2761 9.5 14V9.5Z">
                                                    </path>
                                                </svg><span class="name">精简模式</span></div>
                                        </span></div>
                                    <div><span>
                                            <div class="btn-menu delay-color-bgcolor"><svg width="16" height="16"
                                                    viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path fill-rule="evenodd" clip-rule="evenodd"
                                                        d="M12.4 3.39999H3.59998C3.04769 3.39999 2.59998 3.84771 2.59998 4.39999V11.6C2.59998 12.1523 3.04769 12.6 3.59998 12.6H12.4C12.9523 12.6 13.4 12.1523 13.4 11.6V4.39999C13.4 3.84771 12.9523 3.39999 12.4 3.39999ZM3.59998 2.39999C2.49541 2.39999 1.59998 3.29542 1.59998 4.39999V11.6C1.59998 12.7046 2.49541 13.6 3.59998 13.6H12.4C13.5045 13.6 14.4 12.7046 14.4 11.6V4.39999C14.4 3.29542 13.5045 2.39999 12.4 2.39999H3.59998ZM5.41831 7.86275L3.50912 5.95356L4.21622 5.24645L6.47897 7.50919L6.83252 7.86275L6.47897 8.2163L4.21622 10.479L3.50912 9.77194L5.41831 7.86275ZM8 8H12V7H8V8Z">
                                                    </path>
                                                </svg><span class="name">控制台</span></div>
                                        </span></div>
                                    <div><span>
                                            <div class="btn-menu delay-color-bgcolor"><svg width="16" height="16"
                                                    viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path fill-rule="evenodd" clip-rule="evenodd"
                                                        d="M13 3H3L3 7.5H6.08535C6.29127 6.9174 6.84689 6.5 7.5 6.5H8.5C9.15311 6.5 9.70873 6.9174 9.91465 7.5H13V3ZM6.08535 8.5C6.29127 9.0826 6.84689 9.5 7.5 9.5H8.5C9.15311 9.5 9.70873 9.0826 9.91465 8.5H13V13H3L3 8.5H6.08535ZM3 2C2.44772 2 2 2.44772 2 3V13C2 13.5523 2.44772 14 3 14H13C13.5523 14 14 13.5523 14 13V3C14 2.44772 13.5523 2 13 2H3Z">
                                                    </path>
                                                </svg><span class="name">上下分屏</span></div>
                                        </span></div>
                                    <div><span>
                                            <div><span>
                                                    <div class="btn-menu delay-color-bgcolor"><svg width="16"
                                                            height="16" viewBox="0 0 16 16" fill="none"
                                                            xmlns="http://www.w3.org/2000/svg">
                                                            <path fill-rule="evenodd" clip-rule="evenodd"
                                                                d="M12.76 10.5528C11.8488 12.248 10.0581 13.4 7.99998 13.4C5.01764 13.4 2.59998 10.9823 2.59998 7.99999C2.59998 5.64684 4.10566 3.64454 6.20576 2.905C6.20192 3.00289 6.19998 3.10123 6.19998 3.19999C6.19998 7.00287 9.06857 10.1357 12.76 10.5528ZM13.1638 9.58536C9.8326 9.36115 7.19998 6.58801 7.19998 3.19999C7.19998 3.01655 7.2077 2.83491 7.22282 2.65538C7.25242 2.30417 7.31037 1.96103 7.39439 1.62827C7.02932 1.66253 6.67316 1.72746 6.32852 1.82045C3.60448 2.55546 1.59998 5.04363 1.59998 7.99999C1.59998 11.5346 4.46535 14.4 7.99998 14.4C10.6105 14.4 12.856 12.837 13.8517 10.5958C13.9973 10.268 14.1162 9.92573 14.2056 9.57171C14.0062 9.59042 13.8042 9.59999 13.6 9.59999C13.4534 9.59999 13.3079 9.59506 13.1638 9.58536Z">
                                                            </path>
                                                        </svg><span class="name">深灰模式</span></div>
                                                </span></div>
                                        </span></div>
                                    <div style="position: relative;"><span>
                                            <div class="btn-menu delay-color-bgcolor" style="position: relative;"><svg
                                                    width="16" height="16" viewBox="0 0 16 16" fill="none"
                                                    xmlns="http://www.w3.org/2000/svg">
                                                    <path fill-rule="evenodd" clip-rule="evenodd"
                                                        d="M2.09998 2.20001C1.82383 2.20001 1.59998 2.42387 1.59998 2.70001C1.59998 2.97615 1.82383 3.20001 2.09998 3.20001H5.59998V13.1C5.59998 13.3761 5.82383 13.6 6.09998 13.6C6.37612 13.6 6.59998 13.3761 6.59998 13.1V3.20001H9.89997C10.1761 3.20001 10.4 2.97615 10.4 2.70001C10.4 2.42387 10.1761 2.20001 9.89997 2.20001H2.09998ZM8.5 5.39999C8.22386 5.39999 8 5.62385 8 5.89999C8 6.17614 8.22386 6.39999 8.5 6.39999H10.4V13.1C10.4 13.3761 10.6239 13.6 10.9 13.6C11.1762 13.6 11.4 13.3761 11.4 13.1V6.39999H13.9C14.1761 6.39999 14.4 6.17614 14.4 5.89999C14.4 5.62385 14.1761 5.39999 13.9 5.39999H8.5Z">
                                                    </path>
                                                </svg><span class="name">缩放</span></div>
                                        </span></div>
                                    <div><span>
                                            <div class="btn-menu delay-color-bgcolor"><svg width="16" height="16"
                                                    viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path fill-rule="evenodd" clip-rule="evenodd"
                                                        d="M7.99996 2.7547L12.5425 5.37735V10.6226L7.99996 13.2453L3.4574 10.6226V5.37735L7.99996 2.7547ZM7.49996 1.88867C7.80936 1.71004 8.19056 1.71004 8.49996 1.88867L13.0425 4.51132C13.3519 4.68996 13.5425 5.02008 13.5425 5.37735V10.6226C13.5425 10.9799 13.3519 11.31 13.0425 11.4887L8.49996 14.1113C8.19056 14.29 7.80936 14.29 7.49996 14.1113L2.9574 11.4887C2.648 11.31 2.4574 10.9799 2.4574 10.6226V5.37735C2.4574 5.02008 2.648 4.68996 2.9574 4.51132L7.49996 1.88867ZM9.39996 8C9.39996 8.7732 8.77316 9.4 7.99996 9.4C7.22676 9.4 6.59996 8.7732 6.59996 8C6.59996 7.2268 7.22676 6.6 7.99996 6.6C8.77316 6.6 9.39996 7.2268 9.39996 8ZM10.4 8C10.4 9.32548 9.32544 10.4 7.99996 10.4C6.67448 10.4 5.59996 9.32548 5.59996 8C5.59996 6.67452 6.67448 5.6 7.99996 5.6C9.32544 5.6 10.4 6.67452 10.4 8Z">
                                                    </path>
                                                </svg><span class="name">设置</span></div>
                                        </span></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
    import { computed, ref, reactive, toRefs, defineExpose } from 'vue'
    import draggable from 'vuedraggable'
    const props = defineProps({

    })
    const state = reactive({
        list: [{
            "target_id": "0fce9910-c9bd-4462-953d-865045b9914c",
            "target_type": "api",
            "name": "登陆",
            "sort": 2,
            "version": 3,
            "mark": "developing",
            "status": 1,
            "method": "POST",
            "is_example": 0,
            "is_locked": -1,
            "url": "https:\/\/www.91beeshare.com\/user\/mini\/login",
            "parent_id": "0"
        }, {
            "target_id": "190b4d32-6e40-4ef2-a4e6-14c5284923b8",
            "target_type": "api",
            "name": "初始化视频",
            "sort": 5,
            "version": 5,
            "mark": "developing",
            "status": 1,
            "method": "POST",
            "is_example": 0,
            "is_locked": -1,
            "url": "https:\/\/www.91beeshare.com\/user\/userstudy\/wx\/update\/companycourse\/play\/count",
            "parent_id": "0"
        }, {
            "target_id": "7850c997-8085-4b64-b203-e04c349319a3",
            "target_type": "api",
            "name": "更新播放时长",
            "sort": 4,
            "version": 10,
            "mark": "developing",
            "status": 1,
            "method": "POST",
            "is_example": 0,
            "is_locked": -1,
            "url": "https:\/\/www.91beeshare.com\/user\/userstudy\/wx\/companycourse\/update",
            "parent_id": "0"
        }, {
            "target_id": "7851b838-d760-48ff-bbe5-62f732fa2ad0",
            "target_type": "folder",
            "name": "登陆",
            "sort": 1,
            "version": 1,
            "mark": "developing",
            "status": 1,
            "method": "POST",
            "is_example": 0,
            "url": "",
            "parent_id": "0"
        }, {
            "target_id": "8c358cd2-0354-4a0c-b88a-ee5e8258bea8",
            "target_type": "api",
            "name": "视频列表",
            "sort": 3,
            "version": 1,
            "mark": "developing",
            "status": 1,
            "method": "POST",
            "is_example": 0,
            "is_locked": -1,
            "url": "https:\/\/www.91beeshare.com\/user\/video\/wx\/get\/all\/list\/764",
            "parent_id": "0"
        }, {
            "target_id": "d8379fba-fe56-4511-8c62-d525b46a2dd4",
            "target_type": "api",
            "name": "初始化播放视频",
            "sort": 6,
            "version": 4,
            "mark": "developing",
            "status": 1,
            "method": "POST",
            "is_example": 0,
            "is_locked": -1,
            "url": "https:\/\/www.91beeshare.com\/user\/userstudy\/wx\/addcompanycourse",
            "parent_id": "0"
        }],
        data: {
            "readonly": 0,
            "is_admin": 1,
            "is_manager": 1,
            "details": {
                "project_id": "139e63c7-ff21-4b5f-a5ed-770875ccf088",
                "project_name": "特盖则",
                "create_dtime": "2021-08-26 08:49:50",
                "team_id": "70307c40-0564-42a8-8b66-f4c3be24296b",
                "team_name": "plin的私有团队",
                "requestVars": {
                    "request": {
                        "header": [{
                            "is_checked": "1",
                            "key": "videoGuid",
                            "value": "13838",
                            "description": ""
                        }],
                        "query": [],
                        "cookie": [],
                        "body": [],
                        "auth": {
                            "type": "noauth",
                            "kv": {
                                "key": "",
                                "value": ""
                            },
                            "bearer": {
                                "key": ""
                            },
                            "basic": {
                                "username": "",
                                "password": ""
                            }
                        }
                    },
                    "script": {
                        "pre_script_switch": true,
                        "test_switch": true,
                        "pre_script": "",
                        "test": ""
                    },
                    "variable": {},
                    "auth": {
                        "type": "noauth",
                        "kv": {
                            "key": "",
                            "value": ""
                        },
                        "bearer": {
                            "key": ""
                        },
                        "basic": {
                            "username": "",
                            "password": ""
                        }
                    },
                    "methods": ["POST", "GET", "PUT", "PATCH", "DELETE", "COPY", "HEAD", "OPTIONS", "LINK", "UNLINK", "PURGE", "LOCK", "UNLOCK", "PROPFIND", "VIEW"],
                    "mark": [{
                        "key": "developing",
                        "name": "开发中",
                        "color": "#3A86FF",
                        "is_default": true
                    }, {
                        "key": "complated",
                        "name": "已完成",
                        "color": "#2BA58F",
                        "is_default": true
                    }, {
                        "key": "modifying",
                        "name": "需修改",
                        "color": "#EC4646",
                        "is_default": true
                    }]
                },
                "globalDescriptionVars": {
                    "list": []
                },
                "envListVars": [{
                    "env_id": "-1",
                    "name": "默认环境",
                    "pre_url": "",
                    "list": {}
                }],
                "lastEnvId": "-1",
                "aiDesc": [{
                    "id": 1,
                    "key": "page",
                    "description": "分页页码，数字类型",
                    "status": 1
                }, {
                    "id": 2,
                    "key": "token",
                    "description": "认证令牌",
                    "status": 1
                }, {
                    "id": 3,
                    "key": "email",
                    "description": "电子邮箱，比如 example@qq.com",
                    "status": 1
                }, {
                    "id": 4,
                    "key": "password",
                    "description": "密码",
                    "status": 1
                }, {
                    "id": 5,
                    "key": "username",
                    "description": "用户名",
                    "status": 1
                }, {
                    "id": 6,
                    "key": "telephone",
                    "description": "电话号码",
                    "status": 1
                }, {
                    "id": 7,
                    "key": "tel",
                    "description": "电话号码",
                    "status": 1
                }, {
                    "id": 8,
                    "key": "mobile",
                    "description": "手机号码",
                    "status": 1
                }, {
                    "id": 9,
                    "key": "organization",
                    "description": "组织机构",
                    "status": 1
                }, {
                    "id": 10,
                    "key": "account",
                    "description": "账户",
                    "status": 1
                }, {
                    "id": 11,
                    "key": "data",
                    "description": "返回数据",
                    "status": 1
                }, {
                    "id": 12,
                    "key": "msg",
                    "description": "返回文字描述",
                    "status": 1
                }, {
                    "id": 13,
                    "key": "result",
                    "description": "结果集",
                    "status": 1
                }, {
                    "id": 14,
                    "key": "success",
                    "description": "成功响应",
                    "status": 1
                }, {
                    "id": 15,
                    "key": "error",
                    "description": "错误响应",
                    "status": 1
                }, {
                    "id": 16,
                    "key": "authorization",
                    "description": "授权（码）",
                    "status": 1
                }, {
                    "id": 17,
                    "key": "article_id",
                    "description": "文章ID",
                    "status": 1
                }, {
                    "id": 18,
                    "key": "date",
                    "description": "日期时间",
                    "status": 1
                }, {
                    "id": 19,
                    "key": "price",
                    "description": "价格",
                    "status": 1
                }]
            }
        },
        info: {
            "target_id": "d8379fba-fe56-4511-8c62-d525b46a2dd4",
            "parent_id": "0",
            "project_id": "139e63c7-ff21-4b5f-a5ed-770875ccf088",
            "mark": "developing",
            "target_type": "api",
            "name": "初始化播放视频",
            "method": "POST",
            "sort": 6,
            "type_sort": 1,
            "update_day": 1650988800000,
            "update_dtime": 1651052438,
            "bak_id": 0,
            "version": 4,
            "is_publish": 0,
            "publisher": 0,
            "publish_dtime": 0,
            "hash": "",
            "is_changed": -1,
            "create_dtime": 0,
            "is_doc": 0,
            "is_example": 0,
            "mock_url": "",
            "mock": "{}",
            "url": "https://www.91beeshare.com/user/userstudy/wx/addcompanycourse",
            "request": {
                "url": "https://www.91beeshare.com/user/userstudy/wx/addcompanycourse",
                "description": "",
                "auth": {
                    "type": "noauth",
                    "kv": {
                        "key": "",
                        "value": ""
                    },
                    "bearer": {
                        "key": ""
                    },
                    "basic": {
                        "username": "",
                        "password": ""
                    }
                },
                "body": {
                    "mode": "form-data",
                    "parameter": [{
                        "description": "",
                        "is_checked": 1,
                        "key": "proGuid",
                        "type": "Text",
                        "not_null": "1",
                        "field_type": "",
                        "value": "200"
                    }, {
                        "description": "",
                        "is_checked": 1,
                        "key": "courseGuid",
                        "type": "Text",
                        "not_null": "1",
                        "field_type": "",
                        "value": "764"
                    }, {
                        "description": "",
                        "is_checked": 1,
                        "key": "videoGuid",
                        "type": "Text",
                        "not_null": "1",
                        "field_type": "",
                        "value": "{{videoGuid}}"
                    }],
                    "raw": "",
                    "raw_para": []
                },
                "event": {
                    "pre_script": "",
                    "test": ""
                },
                "header": {
                    "parameter": [{
                        "description": "",
                        "is_checked": 1,
                        "key": "cookie",
                        "type": "Text",
                        "not_null": "1",
                        "field_type": "",
                        "value": "SESSION=e3925551-c3be-4ad0-8427-9558f430af99; Path=/user/; Secure; HttpOnly"
                    }]
                },
                "query": {
                    "parameter": []
                },
                "cookie": {
                    "parameter": []
                },
                "resful": {
                    "parameter": []
                }
            },
            "response": {
                "success": {
                    "raw": "",
                    "parameter": []
                },
                "error": {
                    "raw": "",
                    "parameter": []
                }
            },
            "is_locked": -1,
            "is_save": 1,
            "is_force": 0
        }
    })
    const { list } = toRefs(state)


    defineExpose({})


</script>
<style lang="scss" scoped>
    .content-scale {
        display: flex;
        width: 100%;
        flex-direction: row;
        padding: 0;
        position: relative;
        height: 100%;

        .split-item {
            height: 100%;
            width: 2px;
            flex-shrink: 0;
            z-index: 99;
            overflow: visible;
            position: relative;
            background-color: var(--bg1);
            cursor: col-resize;

            .splitbar {
                width: 4px;
                height: 50px;
                position: absolute;
                z-index: 100;
                top: 50%;
                left: -1px;
                -webkit-transform: translateY(-25px);
                transform: translateY(-25px);
                background-color: var(--split-bar-bg);
                border-radius: 10px;
            }
        }

        .scale-item {
            height: 100%;
            width: 2px;
            flex-shrink: 0;
            z-index: 99;
            overflow: visible;
            position: relative;
            background-color: var(--bg1);
            cursor: col-resize;

            .memu-outer {
                height: 100%;
                flex: 1 1;
                display: flex;

                .menus {
                    width: 100%;
                    flex-shrink: 0;
                    background-color: var(--bg2);
                    margin-left: 8px;
                    border-radius: 5px;
                    color: var(--fn1);
                    padding-top: 8px;
                }
            }
        }
    }

    .menus-trees {
        margin-top: 8px;
        margin-right: 8px;
        padding: 0 2px 0 8px;
        flex: 1 1;
        height: 0;
        flex-shrink: 0;
        overflow: hidden;
        text-align: left;
        color: var(--fn1);
        font-size: 12px;
        height: calc(100vh - 160px);

        .item {
            display: flex;
            justify-content: flex-start;
            height: 30px;
            border-radius: 5px;
            color: var(--fn3);
            padding: 0 5px;
            align-items: center;

            .iconfont {
                width: 14px;
                height: 14px;
                display: flex;
                align-items: center;
                justify-content: center;
                margin: 0 3px;
            }

            .fied {
                width: 36px;
                overflow: hidden;
                color: rgb(223, 123, 7);
                margin-left: 3px;
                margin-right: 6px;
            }
        }

    }

    .button-area {
        height: 30px;
        margin: 16px 0 15px;
        display: flex;
        align-items: center;

        .project-name {
            flex: 1 1;
            width: 0;
            flex-shrink: 0;
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
            color: var(--fn1);
            display: flex;
            align-items: center;
        }

        .button-list {
            flex: 1 1;
            display: flex;
            justify-content: end;

            .iconfont {
                height: 30px;
                border-radius: 5px;
                width: 44px;
                padding: 0 7px;
                display: flex;
                justify-content: center;
                align-items: center;
                cursor: pointer;
            }
        }
    }

    .menus-header {
        margin: 0 8px;
        border-bottom: 1px solid var(--bg3);
        height: 92px;

        .menus-header-filters {
            display: flex;
            align-items: center;

            .btn-target-to {
                width: 30px;
                height: 30px;
                border: 1px solid var(--bd4);
    background-color: var(--bg1);
                margin-left: 10px;
                cursor: pointer;
                display: flex;
                justify-content: center;
                align-items: center;
                color: var(--fn2);
                border-radius: 50%;
            }

            .api-input {
                background: var(--bg1);
                width: 226px;

                ::v-deep() {
                    .el-input-group__append {
                        background: none !important;

                        box-shadow: 0 0 0 1px var(--bd8) inset;
                        padding: 0 5px;

                        .el-select {
                            margin: 0;
                            width: 70px !important;

                            .el-input__wrapper {
                                margin: 0;
                                padding: 0;
                                height: 22px;
                                border: 0;
                                box-shadow: none;
                                background: var(--bg1);
                                font-size: 12px;
                                padding: 0 5px;
                                border-radius: 3px;
                            }
                        }


                    }

                    .el-input-group__prepend {
                        background: none !important;
                        box-shadow: none;
                        position: absolute;
                        left: 0;
                        top: 0;
                        bottom: 0;
                        padding: 0 10px;
                    }

                    &>.el-input__wrapper {
                        background:  var(--bg1);

                        box-shadow: 0 0 0 1px var(--bd8) inset;

                        .el-input__inner {
                            padding-left: 20px;
                            box-sizing: border-box;
                            border-radius: var(--el-input-border-radius);
                            background: none;
                            font-size: 12px;
                        }
                    }

                }
            }
        }
    }
</style>