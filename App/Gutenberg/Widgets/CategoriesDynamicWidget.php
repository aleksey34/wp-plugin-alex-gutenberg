<?php
namespace AlexGutenberg\App\Gutenberg\Widgets;


class CategoriesDynamicWidget{

	private static $instance;

    public function __construct(){

        add_action( 'init', [$this , 'init'] );

    }

    public function  init(){


        register_block_type( plugin_dir_path(__DIR__) . 'build/widgets/categories-dynamic-widget',
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
	    $terms = get_terms(['taxonomy' => 'category']);


      $html = '
        <div class="sidebar_wrap">
			<div class="side_bar_heading">
				<h6>';
      $html .= $attributes['title']  ;
      $html .= '</h6>
			</div>
			<div class="category-detail">
				 <ul>';
            foreach ($terms as $term){
	            $html .='<li>
							<a href="';
	            $html .= get_term_link($term);
	            $html .= '">
								<i class="fa fa-folder-open-o" aria-hidden="true"></i>';
				$html .=          $term->name;
				$html .=		'<span>';
				$html .=   $term->count  ;
				$html .=        '</span>
							</a>
						 </li>';
            }
			$html .='</ul>
			</div>
		</div>
        ';

        return $html;
	}

	public static function instance(){
		if(is_null(self::$instance)){
			self::$instance = new self();
		}

		return static::$instance;

	}

}
