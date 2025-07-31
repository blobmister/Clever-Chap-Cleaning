// Quote.jsx
import React, { useState, useEffect } from 'react';
import './quote.css';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import { useJsApiLoader } from '@react-google-maps/api';
import usePlacesAutocomplete, { getGeocode, getDetails } from 'use-places-autocomplete';
import { Helmet } from "react-helmet";

const libraries = ['places'];
const cleaningOptions = [
	{ type: 'Residential', id: 'apartment', label: 'Apartment / Townhouse' },
	{ type: 'Residential', id: 'home', label: 'Home Cleaning' },
	{ type: 'Residential', id: 'endOfLease', label: 'End of Lease Cleaning' },
	{ type: 'Residential', id: 'carpet', label: 'Carpet Cleaning' },
	{ type: 'Residential', id: 'leather', label: 'Leather / Upholstery Cleaning' },
	{ type: 'Residential', id: 'agedCare', label: 'Aged Care Cleaning' },
	{ type: 'Residential', id: 'tileGrout', label: 'Tile & Grout Cleaning' },
	{ type: 'Residential', id: 'window', label: 'Window Cleaning' },
	{ type: 'Residential', id: 'spring', label: 'Spring Cleaning' },
	{ type: 'Residential', id: 'oven', label: 'Oven Cleaning' },
	{ type: 'Commercial', id: 'office', label: 'Office Cleaning' },
	{ type: 'Commercial', id: 'childcare', label: 'Childcare Cleaning' },
	{ type: 'Commercial', id: 'medical', label: 'Medical Center Cleaning' },
	{ type: 'Commercial', id: 'factory', label: 'Factory Cleaning' },
	{ type: 'Commercial', id: 'warehouse', label: 'Warehouse Cleaning' },
	{ type: 'Commercial', id: 'carpet', label: 'Carpet Cleaning' },
	{ type: 'Commercial', id: 'window', label: 'Window Cleaning' },
	{ type: 'Commercial', id: 'tile', label: 'Tile & Grout Cleaning' },
];

function AddressAutocomplete({ setSelectedDetails }) {
	const {
		ready,
		value,
		setValue,
		suggestions: { status, data },
		clearSuggestions,
	} = usePlacesAutocomplete({
		requestOptions: {
			componentRestrictions: { country: 'au' },
		},
		debounce: 300,
	});

	const handleSelect = async (suggestion) => {
		const address = suggestion.description;
		setValue('', false); // clear field
		clearSuggestions();

		try {
			const results = await getGeocode({ address });
			const addressComponents = results[0].address_components;

			// Extract address fields
			const getComp = (type) =>
				addressComponents.find((c) => c.types.includes(type))?.long_name || '';

			setSelectedDetails({
				address1: `${getComp('street_number')} ${getComp('route')}`.trim(),
				address2: '',
				city: getComp('locality'),
				state: getComp('administrative_area_level_1'),
				postcode: getComp('postal_code'),
			});
		} catch (error) {
			console.error('Error fetching address details:', error);
		}
	};

	return (
		<div className='input-field'>
			<label htmlFor='autofill-address'>Autofill Address</label>
			<input
				type='text'
				id='autofill-address'
				value={value}
				onChange={(e) => setValue(e.target.value)}
				placeholder='Start typing address...'
				disabled={!ready}
			/>
			{status === 'OK' && (
				<ul className='autocomplete-suggestions'>
					{data.map((suggestion) => (
						<li
							key={suggestion.place_id}
							onClick={() => handleSelect(suggestion)}
							style={{ cursor: 'pointer' }}
						>
							{suggestion.description}
						</li>
					))}
				</ul>
			)}
		</div>
	);
}

function HeadingBar() {
	return (
		<div className='headerBar'>
			<h1>Receive Free Quote</h1>
			<p>Fill out the form below and our team will get back to you.</p>
		</div>
	);
}

function QuoteForm({ isLoaded, loadError }) {
	const [didError, setError] = useState(false);
	const [cleaningType, changeCleaningType] = useState('Residential');

	const [address1, setAddress1] = useState('');
	const [address2, setAddress2] = useState('');
	const [city, setCity] = useState('');
	const [state, setState] = useState('');
	const [postcode, setPostcode] = useState('');

	useEffect(() => {
		if (loadError) setError(true);
	}, [loadError]);


	const handleAddressSelect = (details) => {
		setAddress1(details.address1);
		setAddress2(details.address2);
		setCity(details.city);
		setState(details.state);
		setPostcode(details.postcode);
	};

	return (
		<div className='form-container'>
			<Helmet>
				<script src="https://www.google.com/recaptcha/api.js" async defer></script>
      		</Helmet>

			<form action="https://submit-form.com/5zs3ehUvy">
				<fieldset className='contact'>
					<h2>Contact Details</h2>
					<hr />

					<div className='input-field'>
						<label htmlFor='name'>Name</label>
						<input type='text' id='name' name='name' placeholder='John Doe' required />
					</div>

					<div className='input-field'>
						<label htmlFor='email'>Email Address</label>
						<input
							type='email'
							id='email'
							name='email'
							placeholder='email@address.com'
							required
						/>
					</div>

					<div className='input-field'>
						<label htmlFor='phone-number'>Phone Number</label>
						<input
							type='tel'
							id='phone-number'
							name='phone'
							placeholder='0412345678'
							required
						/>
					</div>
				</fieldset>

				<fieldset className='location'>
					<h2>Service Address</h2>
					<hr />
					<div className={didError || !isLoaded ? 'error input-field' : 'input-field'}>
						{isLoaded && <AddressAutocomplete setSelectedDetails={handleAddressSelect} />}
					</div>

					<div className='input-field'>
						<label htmlFor='address1'>Address Line 1</label>
						<input
							type='text'
							id='address1'
							value={address1}
							name='address1'
							onChange={(e) => setAddress1(e.target.value)}
							required
						/>
					</div>

					<div className='input-field'>
						<label htmlFor='address2'>Address Line 2</label>
						<input
							type='text'
							id='address2'
							name='address2'
							value={address2}
							onChange={(e) => setAddress2(e.target.value)}
						/>
					</div>

					<div className='input-field'>
						<label htmlFor='city'>City</label>
						<input
							type='text'
							id='city'
							value={city}
							name='city'
							onChange={(e) => setCity(e.target.value)}
							required
						/>
					</div>

					<div className='input-field'>
						<label htmlFor='state'>State</label>
						<input
							type='text'
							id='state'
							name='state'
							value={state}
							onChange={(e) => setState(e.target.value)}
							required
						/>
					</div>

					<div className='input-field'>
						<label htmlFor='postcode'>Postcode</label>
						<input
							type='number'
							id='postcode'
							name='postcode'
							value={postcode}
							onChange={(e) => setPostcode(e.target.value)}
							required
						/>
					</div>
				</fieldset>

				<fieldset className='cleaning-type'>
					<h2>Select Service</h2>
					<hr />
					<div className='buttons'>
						<button
							className={cleaningType === 'Residential' ? null : 'inactive'}
							onClick={() => {
								changeCleaningType('Residential');
							}}
							type='button'
						>
							Residential
						</button>
						<button
							className={cleaningType === 'Commercial' ? null : 'inactive'}
							onClick={() => {
								changeCleaningType('Commercial');
							}}
							type='button'
						>
							Commercial
						</button>
					</div>
					<div className='checkbox-form'>
						{cleaningOptions.map(({ type, id, label }) => {
							if (type === cleaningType) {
								return (
									<label key={id} htmlFor={id} className='checkbox-option'>
										<input type='checkbox' id={id} name='cleaning-type' value={label}></input>
										<span>{label}</span>
									</label>
								);
							} else {
								return null;
							}
						})}
					</div>

					<div className='room-count'>
						{cleaningType === 'Residential' ? (
							<div className='input-field'>
								<label htmlFor='no-of-bedrooms'>Number of Bedrooms</label>
								<input type='number' id='no-of-bedrooms' name='bedrooms' required />
							</div>
						) : null}

						<div className='input-field'>
							<label htmlFor='no-of-bathrooms'>Number of Bathrooms</label>
							<input type='number' id='no-of-bathrooms' name='bathrooms' required />
						</div>
					</div>

					<div className='input-field'>
						<label htmlFor='further-requests'>Further Requests</label>
						<textarea
							id='further-requests'
							name='extra'
							rows='5'
							cols='40'
							placeholder='Let us know if you have any special instructions or requests'
						/>
					</div>
				</fieldset>

				<div className="g-recaptcha" data-sitekey="6Ldcc5UrAAAAAMqEBbksUjt7G4Yy27yZkiJ1rxZt"></div>
				<button type='submit'>
					Submit
				</button>
			</form>
		</div>
	);
}

export default function Quote() {
	const [loading, setLoading] = useState(false);
  	const [success, setSuccess] = useState(false);
	const [dbError, setdbError] = useState(false);

	const { isLoaded, loadError } = useJsApiLoader({
		googleMapsApiKey: import.meta.env.VITE_GOOGLE_MAPS_API_KEY,
		libraries,
	});

	return (
		<div className='quote'>
			<NavBar />
			<HeadingBar />
			<div className='form-wrapper'>
				<QuoteForm loading={loading} setLoading={setLoading} success={success} setSuccess={setSuccess} dbError={dbError} setdbError={setdbError} loadError={loadError} isLoaded={isLoaded} />
			</div>
			<Footer />
		</div>
	);
}
