
 function ArrowR() {
  return (
    <>
      <button>
        <svg
          viewBox="0 0 10 17"
          fill="none"
          xmlns="http://www.w3.org"
          className="w-4 h-8.25 transition-colors duration-200 "
        >
          <path
            d="M1.5 1.5L8.5 8.5L1.5 15.5"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="text-gray-400 hover:text-blue-500"
          />
        </svg>
      </button>
    </>
  );
}



function ArrowL(props) {
  
    // const scrollLeftt = () => {
    //   // Increase scrollLeft by a set amount (e.g., 300px)
    //   if (scrollleft.current) {
    //     scrollleft.current.scrollLeft += 300;
    //   }
    // };
  
  return (
    <>
      {console.log(props.handle)}
      <svg
        viewBox="0 0 10 17"
        fill="none"
        xmlns="http://www.w3.org"
        className="w-4 h-8.25 transition-colors duration-200"
      >
        <path
          d="M8.5 1.5L1.5 8.5L8.5 15.5"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="text-gray-400 hover:text-blue-500"
          onClick={props.handle()}
        />
      </svg>
    </>
 )}

 export { ArrowR, ArrowL}

