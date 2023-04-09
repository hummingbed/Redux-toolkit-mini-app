const TextField = ({label, inputProps,onChange, value}) => {
    return ( 
        <div className="flex flex-col">
            <label className="mb-2 text-base text-gray-800">{label} </label>
            <input  className="bg-grey py-3 border-2 outline-none"
            {...inputProps} onChange={onChange} value={value}>

            </input>
        </div>
     );
}
 
export default TextField;