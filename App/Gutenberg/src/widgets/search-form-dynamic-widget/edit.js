import { TextControl} from "@wordpress/components";
import { useBlockProps } from '@wordpress/blockEditor';


// import { useSelect } from "@wordpress/data";

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
import {SearchForm} from "./components/SearchForm";



 /**
  * The edit function describes the structure of your block in the context of the
  * editor. This represents what the editor will render when the block is used.
  *
  * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-edit-save/#edit
  *
  * @return {WPElement} Element to render.
  */

    export default function Edit({attributes:{title ,  placeholder , btnName} , setAttributes}) {



		 const setData = (key , value)=>{
        	setAttributes({[key]:value});
	 	}

     return (
        <>
			<div>
				<br/>
				<h2>Search Form Widget</h2>
				<hr/>
		 		<TextControl
					label={`Enter title`}
		 			value={title}
					onChange={(value)=>{
					setData('title' , value)
						}
        			}
		 		/>

				<TextControl
					label={`Enter field placeholder`}
					value={placeholder}
					onChange={(value)=>{
						setData('placeholder' , value)
					}
					}
				/>
				<TextControl
					label={`Enter submit button name`}
					value={btnName}
					onChange={(value)=>{
						setData( 'btnName' , value)
					}
					}
				/>
			</div>
			<hr/>
             <div { ...useBlockProps() } style={{display:"flex", flexWrap:'wrap'}}>
				 {<SearchForm title={title} btnName={btnName} placeholder={placeholder}  />}
            </div>
        </>
     );
 }
