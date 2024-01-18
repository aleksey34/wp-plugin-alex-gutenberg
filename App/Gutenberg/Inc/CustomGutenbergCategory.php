<?php
namespace AlexGutenberg\App\Gutenberg\Inc;


class CustomGutenbergCategory{

	private static $instance;

    public function __construct(){

        $this->alex_create_guten_category();
    }

    //Create custom category for Guten blocks
    public function alex_create_guten_category(){
        add_filter( 'block_categories_all' , function( $categories ) {

            // Adding a new category.
            $categories[] = array(
                'slug'  => 'alex-gutenberg',
                'title' => 'Дополнительые блоки'
            );

	        $categories[] = array(
		        'slug'  => 'alex-gutenberg-widget',
		        'title' => 'Дополнительые виджеты'
	        );

            return $categories;
        } );
    }

	public static function instance(){
		if(is_null(self::$instance)){
			self::$instance = new self();
		}

		return static::$instance;

	}


}


