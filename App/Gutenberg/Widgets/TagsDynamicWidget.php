<?php
namespace AlexGutenberg\App\Gutenberg\Widgets;


class TagsDynamicWidget{

	private static $instance;

    public function __construct(){

        add_action( 'init', [$this , 'init'] );

    }

    public function  init(){


        register_block_type( plugin_dir_path(__DIR__) . 'build/widgets/tags-dynamic-widget',
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
    	$tags = get_tags();

        $html = '
        <div class="sidebar_wrap">
							<div class="side_bar_heading">
								<h6>' ;
        $html .= !empty($attributes['title'])  ?
	        $attributes['title']  : 'Explore tags ';

                        $html .='</h6>
							</div>
							<div class="tag-detail">
								 <ul>' ;
							foreach ( $tags as $tag) {
								$html .= '<li> <a href="';
								$html .= get_tag_link($tag->term_id);
								$html .= '">';
								$html .=  $tag-> name;
								$html .= '</a></li>';
							}
						$html .= '</ul>
							</div>
						</div>';
        return $html;
	}

	public static function instance(){
		if(is_null(self::$instance)){
			self::$instance = new self();
		}

		return static::$instance;

	}

}
