<?php
namespace AlexGutenberg\App\Gutenberg\Widgets;


class RecentPostDynamicWidget{

	private static $instance;

    public function __construct(){
        add_action( 'init', [$this , 'init'] );
    }

    public function  init(){

        register_block_type( plugin_dir_path(__DIR__) . 'build/widgets/recent-post-dynamic-widget',
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
		$args = [
			'posts_per_page' => $attributes['quantity'],
			'post_status'    => 'publish',
            'post_type' => 'post'
			// 'order'          => $attributes['order'],
		];


        $posts = get_posts( $args ); // or any others query - data etc - what you want!

        $html ='<div class="sidebar_wrap">
					<div class="side_bar_heading">
						<h6>';
          $html .= !empty($attributes['title']) ?  $attributes['title']  : 'Recent POst' ;
          $html .=     '</h6>
					</div>';
    if($posts):
          foreach($posts as $post) :
           $categories = get_the_terms( $post, 'category' );
//           $tags = get_the_terms( $post, 'post_tag' );
           $html .=
          '<div class="recent-detail">
				<div class="recent-image">
					<a href="'.get_permalink( $post).'"> <img src="'. get_the_post_thumbnail_url( $post , 'alex-recent-post-widget' ).'" alt="image"> </a>
				</div>

				<div class="recent-text">
					<h6> <a href="'.get_permalink( $post).'"> '.get_the_title($post).'</a> </h6>

					<div class="blog_category side_category">
						<ul>';
	          if( (gettype($categories) ==  'array') && count($categories) > 0 ){

	          	$first_cat = true;
		          foreach($categories as $cat){
			          $html .='<li>';
			          $html .=  !$first_cat ? '&nbsp;,&nbsp;' : '';
                      $html .=  '<a href="'.get_category_link( $cat ).'">'.$cat->name.'</a>';
                      $html .= '</li>';
			          $first_cat= false;
		          }
	          }
	            $html .='</ul>
					</div>

				</div>
			</div>';

                // wp_reset_postdata(  ) ;
          endforeach;
        endif;
        $html .=  '</div>';
        return $html;
	}
	public static function instance(){
		if(is_null(self::$instance)){
			self::$instance = new self();
		}

		return static::$instance;
	}
}
