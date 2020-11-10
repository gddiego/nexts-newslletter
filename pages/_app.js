import '../pages/styles.css'
import 'bootstrap/dist/css/bootstrap.css'
export default function MyApp({ Component, pageProps }) {
	return <Component {...pageProps} />

	function handleFormSubmit(event){
        event.preventDefault();
        console.log(campos);
    }
  }