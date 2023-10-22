import Swal from 'sweetalert2'

const AddCoffee = () => {
    const handleAddCoffee = event =>{
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const quantity = form.quantity.value;
        const taste = form.taste.value;
        const supplier = form.supplier.value;
        const category = form.category.value;
        const details = form.details.value;
        const photo = form.photo.value;

        const newCoffee = {name,quantity,taste,supplier,category,details,photo}
        console.log(newCoffee)
        fetch('http://localhost:5000/coffee',{
            method:'POST',
            headers:{
                'content-type' : 'application/json'
            },
            body:JSON.stringify(newCoffee)
        })
        .then(res => res.json())
        .then(data =>{
            console.log(data)
            if(data.insertedId){
                Swal.fire(
                    'Success!',
                    'Coffee Added successfully!',
                    'success'
                  )
                form.reset()
            }
        })
    }
    return (
        <div className='p-24 bg-[#F4F3F0]'>
            <h2 className='text-3xl font-extrabold '>Add Coffee</h2>
            <form onSubmit={handleAddCoffee}>
                <div className="md:flex mb-8">
                    <div className='md:w-1/2'>
                        <label htmlFor="">Coffee Name</label><br />
                        <input type="text" name='name' placeholder="Coffee Name" className="input input-bordered w-full"  />
                    </div>
                    <div className='md:w-1/2 ml-4'>
                        <label htmlFor="">Available Quantity</label><br />
                        <input type="text" placeholder="Quantity" name='quantity' className="input input-bordered w-full" />
                    </div>
                </div>
                {/* form row */}
                <div className="md:flex mb-8">
                    <div className='md:w-1/2'>
                        <label htmlFor="">Supplier Name</label><br />
                        <input type="text" name='supplier' placeholder="Supplier" className="input input-bordered w-full"  />
                    </div>
                    <div className='md:w-1/2 ml-4'>
                        <label htmlFor="">taste</label><br />
                        <input type="text" placeholder="taste" name='taste' className="input input-bordered w-full" />
                    </div>
                </div>
                {/* form row */}
                <div className="md:flex mb-8">
                    <div className='md:w-1/2'>
                        <label htmlFor="">Category</label><br />
                        <input type="text" name='category' placeholder="Category" className="input input-bordered w-full"  />
                    </div>
                    <div className='md:w-1/2 ml-4'>
                        <label htmlFor="">Details</label><br />
                        <input type="text" placeholder="Details" name='details' className="input input-bordered w-full" />
                    </div>
                </div>
                <div className=" mb-8">
                    <div className=''>
                        <label htmlFor="">Photo URL</label><br />
                        <input type="text" name='photo' placeholder="Photo URL" className="input input-bordered w-full"  />
                    </div>
                </div>
                <input type="submit" value="Add Coffee" className='btn w-full' />
            </form>
        </div>
    );
};

export default AddCoffee;