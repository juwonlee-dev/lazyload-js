/*
 * jQuery JavaScript LazyLoad Library v1.0.1
 * https://github.com/juwonlee-dev/lazyload-js
 *
 * Copyright (c) 2021 JuwonLee
 * Single licensed under the GPL 2.0 licenses.
 * https://github.com/juwonlee-dev/lazyload-js/blob/main/LICENSE
 *
 * Date: Fri Jan 07 2022 16:09:20 GMT+0900 (한국 표준시)
 */
function inject_code(){"use strict";$.getScripts||($.getScripts=function(e){var r,s,c,t,n;if((r=$.extend({async:!1,cache:!0},e)).urls.length<1)console.error("[lazyload] urls parameter undefined");else if("string"==typeof r.urls&&(r.urls=[r.urls]),n={done:[],fail:[]},s=function(){$.ajax({url:r.urls.shift(),dataType:"script",cache:r.cache,success:function(){var c=arguments;c[3]=this.url,n.done.push(c),r.urls.length>0?s():"function"==typeof e.success&&e.success(n)},error:function(){var c=arguments;c[3]=this.url,n.fail.push(c),r.urls.length>0?s():"function"==typeof e.error&&e.error(n)}})},c=function(){var s=arguments;s[3]=this.url,n.done.push(s),n.done.length===r.urls.length&&"function"==typeof e.success&&e.success(n)},t=function(){var s=arguments;s[3]=this.url,n.fail.push(s),n.fail.length===r.urls.length&&"function"==typeof e.error&&e.error(n)},!0===r.async)for(var u=0;u<r.urls.length;u++)$.ajax({url:r.urls[u],dataType:"script",cache:r.cache,success:c,error:t});else s()})}jQuery,inject_code();
