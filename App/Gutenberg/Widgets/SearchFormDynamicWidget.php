<?php
namespace AlexGutenberg\App\Gutenberg\Widgets;
/**
 * Class SearchFormDynamicWidget
 * @package AlexGutenberg\App\Gutenberg\Widgets
 * require add style here and admin part -if it need
 */

class SearchFormDynamicWidget{

	private static $instance;

    public function __construct(){

        add_action( 'init', [$this , 'initWidget'] );

    }

    public function  initWidget(){


        register_block_type( plugin_dir_path(__DIR__) . 'build/widgets/search-form-dynamic-widget',
        [
            'render_callback' => [$this , "blockRenderCallback"],
            // 'attributes'      => [   //--- need or not / work without this data
            //     'quantity' => [
            //         'type'    => 'number',
            //         'default' => 2,
            //     ],

            // ], //==================
        ]

        );

    }


    public function blockRenderCallback( $attributes, $content ) {
    	ob_start();
	    ?>
    <div  class="search-widget-wrap">
	    <?php if(isset($attributes["title"])  && !empty($attributes["title"])):  ?>
	    <div class="search-widget-title">
		    <h4>
			    <?php esc_html_e($attributes["title"] , "alex-theme");  ?>
		    </h4>
	    </div>
	    <?php  endif; ?>
	    <form role="search" method="get" class="search-form" action="<?php  echo home_url('/') ?>">
		    <div class="form-group error_form">
			    <input name="s"
			           value="<?php echo isset($_GET['s']) ? esc_attr__($_GET["s"]) : '' ?>"
			           type="search"
			           class="form-control  search-field"
			           id="exampleInputEmail1widget"
			           placeholder="<?php esc_html_e('Search...', 'alex_theme');  ?>"
			    />
		    </div>
		    <div class="search-btn-wrap">
			    <button  class="btn btn-default search-submit" type="submit">
				    <i class="fa fa-search" aria-hidden="true"></i>
				    <span>
			            <?php esc_html_e('Search Now' , 'alex_theme');   ?>
			        </span>
			    </button>
		    </div>
	    </form>
    </div>
<?php
		return  ob_get_clean();
	}

	public static function instance(){
		if(is_null(self::$instance)){
			self::$instance = new self();
		}

		return static::$instance;

	}

}
