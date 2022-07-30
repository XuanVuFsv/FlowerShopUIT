import React, { useEffect, useState } from "react";
import http from "../../services/http";

export const useCategoriesData = () =>
{

	const [dataApi, setDataApi] = useState();

	useEffect( () =>
	{
		http.get( '/category/' ).then( ( result ) =>
		{
			console.log( "result", result );
		} ).catch( ( err ) =>
		{
			console.log( "err", err );
		} );
	}, [] )


	return dataApi;
};
