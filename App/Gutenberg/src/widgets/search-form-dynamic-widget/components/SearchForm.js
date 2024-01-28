
export function SearchForm( {title , placeholder , btnName}) {
	return (
		<>
			{
		title ?
			<div className={`search-form-title`}>
				<h4>
					{title}
				</h4>
			</div>
			: ''
			}
			<form role="search" method="get" className="search-form" action="<?php  echo home_url('/') ?>">
				<div className="form-group error_form">
					<input name="s"
						   value=""
						   type="search"
						   className="form-control  search-field"
						   id="exampleInputEmail1"
						   placeholder={placeholder}
					/>
				</div>
				<div className="search_btn">
					<button value="<?php esc_html_e('Search Now' , 'alex_theme');   ?>"
							className="btn btn-default search-submit" type="submit">
						<i className="fa fa-search" aria-hidden="true"></i>
						<span>
						{btnName}
            </span>
					</button>
				</div>
			</form>
		</>
	);
};
