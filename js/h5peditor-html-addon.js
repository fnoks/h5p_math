var H5PEditor = H5PEditor || {};
H5PEditor.HtmlAddons = H5PEditor.HtmlAddons || {};
H5PEditor.HtmlAddons.math = H5PEditor.HtmlAddons.math || {};

H5PEditor.HtmlAddons.math.mathjax = function (config) {
  config.extraPlugins = 'lineutils,widgetselection,widget,mathjax';
  config.mathJaxLib = 'http://cdnjs.cloudflare.com/ajax/libs/mathjax/2.7.0/MathJax.js?config=TeX-AMS_HTML';
  config.toolbar.push({
    name: 'mathjax',
    items: ['Mathjax']
  });
};
