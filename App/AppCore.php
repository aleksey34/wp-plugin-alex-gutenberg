<?php

namespace AlexGutenberg\App;

//use AlexCustomizer\App\FooterSection\FooterSection;
//use AlexCustomizer\App\SocialSection\SocialSection;

//use WP_Customize_Color_Control;
//use WP_Customize_Image_Control;
//use WP_Customize_Manager;


use AlexGutenberg\App\Gutenberg\Gutenberg;

class AppCore {

	private static $instance;

	public function __construct (){
		/**
		 * add require file
		 */
		$this->addRequire();


		$this->init();
	}

	private function addRequire(){

		require_once plugin_dir_path(__DIR__) . 'App/include.php';

		require_once plugin_dir_path(__DIR__) . 'App/Gutenberg/Gutenberg.php';


	//==== BLOCKS ===================
		/**
		 * blocks
		 */
		require_once plugin_dir_path(__DIR__) . 'App/Gutenberg/Blocks/EventsAllEventsDynamic.php';
		require_once plugin_dir_path(__DIR__) . 'App/Gutenberg/Blocks/SlickSliderFromDefaultGallery.php';

		/**
		 * adding - init static blocks
		 */
		require_once plugin_dir_path(__DIR__) . 'App/Gutenberg/Blocks/StaticBlocks.php';

//==========WIDGETS =================================
		/**
		 * widgets
		 */
		require_once plugin_dir_path(__DIR__) . 'App/Gutenberg/Widgets/RecentPostDynamicWidget.php';
		require_once plugin_dir_path(__DIR__) . 'App/Gutenberg/Widgets/TagsDynamicWidget.php';
		require_once plugin_dir_path(__DIR__) . 'App/Gutenberg/Widgets/CategoriesDynamicWidget.php';


		require_once plugin_dir_path(__DIR__) . 'App/Gutenberg/Widgets/StaticWidgets.php';


//===========================================
		/**
		 * settings
		 */
		require_once plugin_dir_path(__DIR__) . 'App/Gutenberg/Inc/CustomGutenbergCategory.php';

		require_once plugin_dir_path(__DIR__) . 'App/Gutenberg/Inc/Api/RestPrepareDynamic.php';




	}



	public function init(){

		Gutenberg::instance();


	}





	public static function instance(){
		if(is_null(self::$instance)){
			self::$instance = new self();
		}

		return static::$instance;

	}

}
