import React, { useState } from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
export function Home() {
	const [hide, setHide] = useState(true);
	const render = () => {
		if (hide === true) {
			return (
				<div>
					<h1>Hello Rigo!</h1>
					<p>
						<img src={rigoImage} />
					</p>
					<a href="#" className="btn btn-success">
						If you see this green button... bootstrap is working
					</a>
					<p>
						Made by{" "}
						<a href="http://www.4geeksacademy.com">
							4Geeks Academy
						</a>
						, with love!
					</p>
				</div>
			);
		} else {
			return "";
		}
	};
	return (
		<div className="text-center mt-5">
			<button onClick={() => setHide(!hide)} className="btn btn-success">
				Show
			</button>
			{render()}
		</div>
	);
}
