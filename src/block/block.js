
const {  PlainText, RichText, MediaUpload, InspectorControls } = wp.editor;
const { registerBlockType } = wp.blocks;
const { TextControl, TextareaControl, SelectControl, ColorPalette } = wp.components;
const { __ } = wp.i18n; // Import __() from wp.i18n

//  Import CSS.
import './style.scss';
import './editor.scss';


registerBlockType( 'ruhel-block/ruhel-guten-block', {
	
	title: __( 'Ruhel Block' ), 
	icon: 'dashboard', 
	category: 'layout', 
	attributes: {
		title: {
			type:'string',
			source: 'text',
			selector: '.title',
			default: 'Web Development'
		},
		description: {
			type: 'array',
			source:'children',
			selector: '.description',
			default: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sit amet sem sit amet nisi mattis rutrum. Donec ultricies porta arcu. Quisque imperdiet efficitur nisl, vitae scelerisque augue gravida id. '
		},
		
		serviceIcon: {
			default: 'dashicons dashicons-dashboard'
		},

		titleColor: {
			default: '#00f',
		},

		descriptionColor: {
			default: '#f00'
		},

		readMoreUrl: {
			type: 'string',
			default: 'https://www.facebook.com'
		},
		readMoreBtnColor: {
			default: '#009688'
		}

	},



	edit( { attributes, className, setAttributes } ){

		console.log("Edit Items: " + 
		
			"Title:" + attributes.title +'  '+
			"Description: " + attributes.description + '  '+
			"serviceIcon: " + attributes.serviceIcon + ' '  +
			"titleColor: " + attributes.titleColor + ' ' +
			"ReadMoreUrl:" + attributes.readMoreUrl
		);

		const colors = [ 
			{ name: 'red', color: '#f00' }, 
			{ name: 'white', color: '#fff' }, 
			{ name: 'blue', color: '#00f' }, 
		];
	
		const desColors = [
			{ name: 'blue', color: '#00f' }, 
			{ name: 'red', color: '#f00' }, 
			{ name: 'white', color: '#fff' }, 
		];
	
		const redMoreBtnColors = [
			
			{ name: 'white', color: '#fff' },
			{ name: 'blue', color: '#00f' }, 
			{ name: 'red', color: '#f00' }, 
		];


		return (
			<div className="service-box-backend"> 
			
				<InspectorControls>
					
					<TextControl
						label="Service Title:"
						value={ attributes.title }
						onChange={ content => setAttributes({ title: content }) }
					/>

					<TextareaControl 
					  label="Service Description"
					  value={ attributes.description }
					  onChange={ content => setAttributes({ description: content}) }
					  className="description"
					  placeholder="Write Your Service Description"			
					/>
					
					<SelectControl
						label="Service Icon"
						value={ attributes.serviceIcon }
						options={ [
							{ label: 'Dashboard', value: 'dashboard' },
							{ label: 'Admin', value: 'admin-users' },
							{ label: 'Wordpress', value: 'wordpress' },
						] }
						onChange={ ( content ) => { setAttributes( { serviceIcon: content } ) } }
					/>
				
					<p> Title Color: </p>	
					<ColorPalette 
						colors={ colors } 
						value={ attributes.titleColor }
						onChange={ ( color ) => setAttributes( { titleColor: color } ) } 
					/>

					<p> Description Color: </p>	
					<ColorPalette 
						colors={ desColors } 
						value={ attributes.descriptionColor }
						onChange={ ( color ) => setAttributes( { descriptionColor: color } ) } 
					/>

					<TextControl
						label="Read More Url"
						value={attributes.readMoreUrl}
						onChange={  (content) => setAttributes( { readMoreUrl: content } )  }
					/>

					<p> Read More Btn Color: </p>	
					<ColorPalette 
						colors={ redMoreBtnColors } 
						value={ attributes.readMoreBtnColor }
						onChange={ ( color ) => setAttributes( { readMoreBtnColor: color } ) } 
					/>

				</InspectorControls>

				<div className="service-item"> 
					<span className={'dashicons dashicons-' + attributes.serviceIcon }></span>

						<PlainText 
						value={ attributes.title }
						className="title" 
						style={{ color: attributes.titleColor }}
						onChange={ ( content ) => setAttributes( { title: content } )  }
						tagName="h2"
						/>
						
						<RichText 
							value={ attributes.description }
							className="description"
							style={{ color: attributes.descriptionColor }}
							onChange={ (content) => setAttributes( { description: content }) }
							tagName="p"
						/>
							
						<hr/>	

					<a  href={ attributes.readMoreUrl } className="readMore" type="button" target="__blank" style={{ background: attributes.readMoreBtnColor,  border:attributes.readMoreBtnColor }}> Read More </a>
				</div>
			
			</div>


		);
	},


	save({ attributes }){
	
		console.log("Save Items: " + 
		
		"Title:" + attributes.title +'  '+
		"Description:" + attributes.description + '  '+
		"serviceIcon:" + attributes.serviceIcon + ' ' +
		"ReadMoreUrl:" + attributes.readMoreUrl
	);

		return (
			<div className="service-box-backend"> 
				<div className="service-item"> 
					<span className={'dashicons dashicons-' + attributes.serviceIcon }></span>
				 	<h2 className="title" style={{ color: attributes.titleColor }}> { attributes.title } </h2>
					<p className="description" style={{ color: attributes.descriptionColor }}> { attributes.description } </p>
					<hr/>	
					<a  href={ attributes.readMoreUrl } className="readMore" type="button" target="__blank" style={{ background: attributes.readMoreBtnColor,  border:attributes.readMoreBtnColor }}> Read More </a>
				</div>
			</div>
		);

	},



} );




