import { TextControl} from "@wordpress/components";
import { useBlockProps } from '@wordpress/blockEditor';


import { useSelect } from "@wordpress/data";

// import {date} from '@wordpress/date';

// import {useEffect, useState} from '@wordpress/element';

/**
 * Retrieves the translation of text.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-i18n/
 */
 import { __ } from '@wordpress/i18n';

 /**
  * React hook that is used to mark the block wrapper element.
  * It provides all the necessary props like the class name.
  *
  * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-block-editor/#useblockprops
  */
//  import  { useBlockProps } from '@wordpress/block-editor';

 /**
  * Lets webpack process CSS, SASS or SCSS files referenced in JavaScript files.
  * Those files can contain any CSS code that gets applied to the editor.
  *
  * @see https://www.npmjs.com/package/@wordpress/scripts#using-css
  */
 import './editor.scss';

 /**
  * The edit function describes the structure of your block in the context of the
  * editor. This represents what the editor will render when the block is used.
  *
  * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-edit-save/#edit
  *
  * @return {WPElement} Element to render.
  */

    export default function Edit({attributes:{title} , setAttributes}) {

    // 	const data = useSelect( ( select ) =>
	// 	 select( 'core' ).getEntityRecords( 'taxonomy', 'category', // may be -category and others
	// 		 { per_page: -1, orderby: 'name', order: 'asc',
	// 			 _fields: 'id,name,slug,link' } ) // !!!! поле id обязательно!!!! иначе не будет работать
	// );

    	const categories  =useSelect( ( select ) =>
			select( 'core' ).getEntityRecords( 'taxonomy', 'category', // may be -category and others
				{ per_page: -1, orderby: 'name', order: 'asc',
					_fields: 'id,name,slug,link,count' } ) // !!!! поле id обязательно!!!! иначе не будет работать
	);




        const setTitle = (newTitle) =>{
        	setAttributes({title: newTitle});
		}


     return (
        <>
			<div>
				<br/>
				<h2>Categories Widget</h2>
				<hr/>
		 		<TextControl
					label={`Enter widget title`}
		 			value={title}
					onChange={(newTitle)=>{
					setTitle(newTitle)
						}
        			}
		 		/>
			</div>
			<hr/>
             <div { ...useBlockProps() } style={{display:"flex", flexWrap:'wrap'}}>
				<div className="sidebar_wrap">
					<div className="side_bar_heading">
						<h6>{ title ? title : 'Categories' } </h6>
					</div>

					<div className="tag-detail">
						<ul>
							{
								categories && categories.map( (category)=>{
									return (
									<li>
										<a key={category.id} href="{category.link}">
											<i className="fa fa-folder-open-o" aria-hidden="true"></i>
											{category.name}
											<span> {category.count} </span>
										</a>
									</li>
								)
								})
							}
						</ul>
					</div>
				</div>
            </div>
        </>
     );
 }
