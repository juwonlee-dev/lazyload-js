/*
 * jQuery JavaScript LazyLoad Library v1.0.0
 * https://github.com/juwonlee-dev/lazyload-js
 *
 * Copyright (c) 2021 JuwonLee
 * Single licensed under the GPL 2.0 licenses.
 * https://github.com/juwonlee-dev/lazyload-js/blob/main/LICENSE
 *
 * Date: Tue Aug 24 2021 20:30:00 GMT+0900 (한국 표준시)
 */
(function(){inject_code()})(jQuery);function inject_code(){"use strict";$.getScripts||($.getScripts=function(a){var b,c,d,e,f;if(b=$.extend({async:!1,cache:!0},a),"string"==typeof b.urls&&(b.urls=[b.urls]),f={done:[],fail:[]},c=function(){$.ajax({url:b.urls.shift(),dataType:"script",cache:b.cache,success:function(){var d=arguments;d[3]=this.url,f.done.push(d),0<b.urls.length?c():"function"==typeof a.success&&a.success(f)},error:function(){var d=arguments;d[3]=this.url,f.fail.push(d),0<b.urls.length?c():"function"==typeof a.error&&a.error(f)}})},d=function(){var c=arguments;c[3]=this.url,f.done.push(c),f.done.length===b.urls.length&&"function"==typeof a.success&&a.success(f)},e=function(){var c=arguments;c[3]=this.url,f.fail.push(c),f.fail.length===b.urls.length&&"function"==typeof a.error&&a.error(f)},!0===b.async)for(var g=0;g<b.urls.length;g++)$.ajax({url:b.urls[g],dataType:"script",cache:b.cache,success:d,error:e});else c()})}
