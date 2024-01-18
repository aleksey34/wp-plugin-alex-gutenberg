/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/blocks/slick-slider-v3/components/AddListItemBtn/index.js":
/*!***********************************************************************!*\
  !*** ./src/blocks/slick-slider-v3/components/AddListItemBtn/index.js ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AddListItemBtn: () => (/* binding */ AddListItemBtn)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

const AddListItemBtn = ({
  title,
  content,
  cssClass
}) => {
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("button", {
    title: title,
    className: cssClass
  }, content);
};


/***/ }),

/***/ "./src/blocks/slick-slider-v3/components/slider-item.js":
/*!**************************************************************!*\
  !*** ./src/blocks/slick-slider-v3/components/slider-item.js ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__);




const SliderItem = ({
  data: {
    removeImg,
    resetMedia,
    onSelectMedia,
    item,
    index
  }
}) => {
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.Card, {
    className: "alex-slick-slider-item"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.CardHeader, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("h5", null, "\u0414\u043E\u0431\u0430\u0432\u044C\u0442\u0435 \u0438\u0437\u043E\u0431\u0440\u0430\u0436\u0435\u043D\u0438\u0435 \u0438\u0437 \u0431\u0438\u0431\u043B\u0438\u043E\u0442\u0435\u043A\u0438 \u0438\u043B\u0438 \u0437\u0430\u0433\u0440\u0443\u0437\u0438\u0442\u0435 \u0438\u0437\u043E\u0431\u0440\u0430\u0436\u0435\u043D\u0438\u0435 \u0438\u043B\u0438 \u0432\u0432\u0435\u0434\u0438\u0442\u0435 \u0441\u0441\u044B\u043B\u043A\u0443.")), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.CardBody, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("input", {
    onInput: event => {
      const media = {
        id: 0,
        url: event.target.value
      };
      onSelectMedia(media, index);
    },
    style: {
      margin: "10px 0"
    },
    value: item.url,
    type: `text`,
    placeholder: `ссылка на изображение.`
  }), item.url !== "" ? (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.MediaUploadCheck, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.MediaUpload, {
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Replace image', 'alex-theme'),
    value: item.id,
    onSelect: media => {
      onSelectMedia(media, index);
    },
    allowedTypes: ['image'],
    render: ({
      open
    }) => (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.Button, {
      onClick: open,
      variant: `secondary`,
      isLarge: true
    }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Replace image', 'awp'))
  })), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.MediaUploadCheck, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.Button, {
    onClick: () => {
      resetMedia(index);
    },
    isLink: true,
    isDestructive: true
  }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Reset image', 'alex-theme')))) : ''), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.CardFooter, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.MediaUploadCheck, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.MediaUpload, {
    onSelect: media => {
      onSelectMedia(media, index);
    },
    value: item.id,
    allowedTypes: ['image'],
    render: ({
      open
    }) => (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.Button, {
      className: item.id === 0 ? 'editor-post-featured-image__toggle' : 'editor-post-featured-image__preview',
      onClick: open,
      style: {
        height: "auto",
        backgroundColor: "rgba( 0 , 0 , 0 , 0.1 )"
      }
    }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Choose an image', 'alex-theme'), item.url !== "" && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("img", {
      alt: `image`,
      style: {
        width: "100%"
      },
      src: item.url
    }))
  }))), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
    onClick: () => removeImg(index),
    title: `Удалить`,
    className: `remove-img`
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("b", null, "\xD7")));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SliderItem);

/***/ }),

/***/ "./src/blocks/slick-slider-v3/edit.js":
/*!********************************************!*\
  !*** ./src/blocks/slick-slider-v3/edit.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_AddListItemBtn__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/AddListItemBtn */ "./src/blocks/slick-slider-v3/components/AddListItemBtn/index.js");
/* harmony import */ var _components_slider_item__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/slider-item */ "./src/blocks/slick-slider-v3/components/slider-item.js");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _variables_slider_type_options__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./variables/slider-type-options */ "./src/blocks/slick-slider-v3/variables/slider-type-options.js");
/* harmony import */ var _editor_scss__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./editor.scss */ "./src/blocks/slick-slider-v3/editor.scss");








const Edit = ({
  attributes,
  setAttributes
}) => {
  const removeImg = index => {
    const newItems = attributes.items.filter((el, i) => i !== index);
    setAttributes({
      items: newItems
    });
  };
  const resetMedia = index => {
    const newItems = [...attributes.items];
    newItems[index] = {
      id: 0,
      url: ""
    };
    setAttributes({
      items: newItems
    });
  };
  const onSelectMedia = (media, index) => {
    const newItems = [...attributes.items];
    newItems[index] = {
      id: media.id,
      url: media.url
    };
    setAttributes({
      items: newItems
    });
  };
  const getCards = items => {
    return items && items.length ? items.map((item, i) => {
      return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_components_slider_item__WEBPACK_IMPORTED_MODULE_2__["default"], {
        data: {
          item,
          index: i,
          removeImg,
          resetMedia,
          onSelectMedia
        }
      });
    }) : '';
  };
  const addImg = () => {
    const newItem = {
      id: 0,
      url: ""
    };
    setAttributes({
      items: [...attributes.items, newItem]
    });
  };
  const content = (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", null, "+"), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", null, "\u0434\u043E\u0431\u0430\u0432\u0438\u0442\u044C \u0438\u0437\u043E\u0431\u0440\u0430\u0436\u0435\u043D\u0438\u0435"));
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__.InspectorControls, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.PanelBody, {
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__.__)('Select type of the slider', 'alex-theme'),
    initialOpen: true
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.SelectControl, {
    label: "Slider Type",
    value: attributes.contentType,
    options: _variables_slider_type_options__WEBPACK_IMPORTED_MODULE_6__.ContentTypes,
    onChange: newValue => {
      setAttributes({
        contentType: newValue
      });
    },
    __nextHasNoMarginBottom: true
  }))), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    style: {
      textAlign: 'center',
      padding: "30px 15px 15px 15px"
    }
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("h3", null, "Slider - based on slick slider js lib , OR custom gallery (develop)", (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("br", null), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", null, "It has options - sliders or gallery(develop)"))), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: ` alex-slick-slider-v3  alex-slick-slider `
  }, getCards(attributes.items), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: `add-img`,
    onClick: addImg
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_components_AddListItemBtn__WEBPACK_IMPORTED_MODULE_1__.AddListItemBtn, {
    title: `Добавить изображение`,
    content: content,
    cssClass: `add-img-btn`
  }))));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Edit);

/***/ }),

/***/ "./src/blocks/slick-slider-v3/save.js":
/*!********************************************!*\
  !*** ./src/blocks/slick-slider-v3/save.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ save)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__);

/**
 * React hook that is used to mark the block wrapper element.
 * It provides all the necessary props like the class name.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-block-editor/#useblockprops
 */


/**
 * The save function defines the way in which the different attributes should
 * be combined into the final markup, which is then serialized by the block
 * editor into `post_content`.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-edit-save/#save
 *
 * @return {WPElement} Element to render.
 */
function save({
  attributes: {
    items,
    contentType
  }
}) {
  const getImg = items => {
    return items.map(item => {
      return item.url ? (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("li", null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("img", {
        alt: `gallery image`,
        src: item.url
      })) : '';
    });
  };
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: `alex-gutenberg-slick-slider_wrapper ${contentType}`,
    ..._wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.useBlockProps.save()
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: `alex-gutenberg-slick-slider`
  }, items && items.length ? contentType === "imageNav" ? (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("ul", {
    className: `slider-img`
  }, getImg(items)), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("ul", {
    className: `slider-nav`
  }, getImg(items))) : (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("ul", {
    className: `slider-list`
  }, getImg(items)) : ''));
}

/***/ }),

/***/ "./src/blocks/slick-slider-v3/variables/slider-type-options.js":
/*!*********************************************************************!*\
  !*** ./src/blocks/slick-slider-v3/variables/slider-type-options.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ContentTypes: () => (/* binding */ ContentTypes)
/* harmony export */ });
const ContentTypes = [{
  value: "imageNav",
  label: "Slider - Навигация изображения"
}, {
  value: "imageNav2",
  label: "Slider Type 2"
}, {
  value: "imageNav3",
  label: "Slider Type 3"
}, {
  value: "customGallery",
  label: "Custom gallery"
}, {
  value: "customGallery2",
  label: "Custom gallery2"
}];

/***/ }),

/***/ "./src/blocks/slick-slider-v3/editor.scss":
/*!************************************************!*\
  !*** ./src/blocks/slick-slider-v3/editor.scss ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "React" ***!
  \************************/
/***/ ((module) => {

module.exports = window["React"];

/***/ }),

/***/ "@wordpress/block-editor":
/*!*************************************!*\
  !*** external ["wp","blockEditor"] ***!
  \*************************************/
/***/ ((module) => {

module.exports = window["wp"]["blockEditor"];

/***/ }),

/***/ "@wordpress/blocks":
/*!********************************!*\
  !*** external ["wp","blocks"] ***!
  \********************************/
/***/ ((module) => {

module.exports = window["wp"]["blocks"];

/***/ }),

/***/ "@wordpress/components":
/*!************************************!*\
  !*** external ["wp","components"] ***!
  \************************************/
/***/ ((module) => {

module.exports = window["wp"]["components"];

/***/ }),

/***/ "@wordpress/i18n":
/*!******************************!*\
  !*** external ["wp","i18n"] ***!
  \******************************/
/***/ ((module) => {

module.exports = window["wp"]["i18n"];

/***/ }),

/***/ "./src/blocks/slick-slider-v3/block.json":
/*!***********************************************!*\
  !*** ./src/blocks/slick-slider-v3/block.json ***!
  \***********************************************/
/***/ ((module) => {

module.exports = JSON.parse('{"$schema":"https://schemas.wp.org/trunk/block.json","apiVersion":2,"name":"alex-gutenberg/slick-slider-v3","version":"0.1.0","title":"Slick Slider v3","category":"alex-gutenberg","icon":"smiley","description":"Slick Slider v3","supports":{"html":false,"align":true},"attributes":{"items":{"type":"array","default":[{"url":"","id":0}]},"contentType":{"type":"string","default":"imageNav"},"mediaId":{"type":"number","default":0},"mediaUrl":{"type":"string","default":""}},"textdomain":"alex-theme","editorScript":"file:./index.js","editorStyle":"file:./index.css","style":"file:./style-index.css"}');

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!*********************************************!*\
  !*** ./src/blocks/slick-slider-v3/index.js ***!
  \*********************************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _block_json__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./block.json */ "./src/blocks/slick-slider-v3/block.json");
/* harmony import */ var _edit__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./edit */ "./src/blocks/slick-slider-v3/edit.js");
/* harmony import */ var _save__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./save */ "./src/blocks/slick-slider-v3/save.js");
 // = wp.blocks;
// import { withSelect } from   "@wordpress/data";   //=  // wp.data;




(0,_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__.registerBlockType)(_block_json__WEBPACK_IMPORTED_MODULE_1__.name, {
  edit: _edit__WEBPACK_IMPORTED_MODULE_2__["default"],
  save: _save__WEBPACK_IMPORTED_MODULE_3__["default"]
});
})();

/******/ })()
;
//# sourceMappingURL=index.js.map