
const Alerta = ({ alerta }) => {
    console.log(`${alerta.error && 'bg-sky-400'}`)
    return (
        <div className={`${alerta.error && 'bg-red-400'} bg-sky-400 text-red text-center uppercase font-bold p-3 rounded-xl  text-sm mb-10`}>
            {alerta.msg}
        </div>
    )
}

export default Alerta