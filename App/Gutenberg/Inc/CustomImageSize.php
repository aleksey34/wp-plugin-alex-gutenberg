<?php
namespace AlexGutenberg\App\Gutenberg\Inc;


class CustomImageSize{

	private static $instance;

	public function __construct(){

		$this->init();
	}

	//Create custom category for Guten blocks
	public function init(){

		// for widget recent post
		add_image_size( 'alex-recent-post-widget', 87, 87, true );



	}

	public static function instance(){
		if(is_null(self::$instance)){
			self::$instance = new self();
		}

		return static::$instance;

	}


}
