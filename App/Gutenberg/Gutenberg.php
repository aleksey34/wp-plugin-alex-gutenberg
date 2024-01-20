<?php
namespace AlexGutenberg\App\Gutenberg;

use AlexGutenberg\App\Gutenberg\Widgets\CategoriesDynamicWidget;
use AlexGutenberg\App\Gutenberg\Blocks\EventsAllEventsDynamic;
use AlexGutenberg\App\Gutenberg\Widgets\RecentPostDynamicWidget;
use AlexGutenberg\App\Gutenberg\Blocks\SlickSliderFromDefaultGallery;
use AlexGutenberg\App\Gutenberg\Widgets\TagsDynamicWidget;
use AlexGutenberg\App\Gutenberg\Inc\Api\RestPrepareDynamic;
use AlexGutenberg\App\Gutenberg\Inc\CustomGutenbergCategory;
use AlexGutenberg\App\Gutenberg\Inc\CustomImageSize;
use AlexGutenberg\App\Gutenberg\Blocks\StaticBlocks;
use AlexGutenberg\App\Gutenberg\Widgets\StaticWidgets;


class Gutenberg {

	private static $instance;

	public function __construct (){

		/**
		 * init classes
		 */
		$this->init();

	}



	private function init(){

		/**
		 * create custom categories
		 * change slug category in block.json for set widget category
		 */
		CustomGutenbergCategory::instance();

		/**
		 *  prepare rest api request
		 */
		RestPrepareDynamic::instance();

		/**
		 * set custom image size - for recent post widget
		 *  - and other if it needs
		 */
		CustomImageSize::instance();


//===== BLOCKS ============================
		/**
		 * init static blocks
		 */
		StaticBlocks::instance();


		/**
		 * init block --  all-events  Dynamic block
		 * Create new class for new dynamic block and add here
		 */
		EventsAllEventsDynamic::instance();

		/**
		 *
		 *
		 */
		SlickSliderFromDefaultGallery::instance();

		// === WIDGETS ===============================
		/**
		 * widget recent post
		 */
		RecentPostDynamicWidget::instance();

		/**
		 * widget tags
		 */
		TagsDynamicWidget::instance();

		/**
		 * widget categories
		 */
		CategoriesDynamicWidget::instance();


		/**
		 * Static widget init
		 */
		StaticWidgets::instance();


	}

	public static function instance(){
		if(is_null(self::$instance)){
			self::$instance = new self();
		}

		return static::$instance;
	}

}
