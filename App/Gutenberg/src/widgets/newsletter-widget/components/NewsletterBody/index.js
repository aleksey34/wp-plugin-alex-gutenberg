


export const NewsletterBody = ({data})=>{

const {title , description, placeholder , btnName} = data;

	return (
		<div className="news_sletter">
			<div className="side_bar_sub_heading">
				<h6>{ title ||  "Newsletter" }  </h6>
			</div>
			<p>{ description ||
			"Subscribe to our email newsletter for useful tips and resources."}
			</p>
			<form>
				<div className="form-group blog_form">
					<input type="email" className="form-control" id="exampleInputEmail1"
						   placeholder={ placeholder || "Email Address"}/>
				</div>
				<div className="search_btn-3">
					<button className="btn btn-default" type="submit">
						{ btnName || "Subscribe" }
					</button>
				</div>
			</form>
		</div>
	)
}
