import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Swal from 'sweetalert2';

const UpdateCoffee = () => {
    const coffee = useLoaderData()
    const {_id,name,quantity,taste,supplier,category,details,photo} = coffee

    const handleUpdateCoffee = event =>{
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
        fetch(`http://localhost:5000/coffee/${_id}`,{
            method:'PUT',
            headers:{
                'content-type' : 'application/json'
            },
            body:JSON.stringify(newCoffee)
        })
        .then(res => res.json())
        .then(data =>{
            console.log(data)
            if(data.modifiedCount >0){
                Swal.fire(
                    'Success!',
                    'Coffee Updated successfully!',
                    'success'
                  )
                
            }
        })
    }

    return (
        <div>
            <div className='p-24 bg-[#F4F3F0]'>
            <h2 className='text-3xl font-extrabold mb-4 defaultValue={} '>Update Coffee: {name}</h2>
            <form onSubmit={handleUpdateCoffee}>
                <div className="md:flex mb-8">
                    <div className='md:w-1/2'>
                        <label htmlFor="">Coffee Name</label><br />
                        <input type="text" name='name' placeholder="Coffee Name" defaultValue={name}  className="input input-bordered w-full"  />
                    </div>
                    <div className='md:w-1/2 ml-4'>
                        <label htmlFor="">Available Quantity</label><br />
                        <input type="text" placeholder="Quantity" name='quantity' defaultValue={quantity}  className="input input-bordered w-full" />
                    </div>
                </div>
                {/* form row */}
                <div className="md:flex mb-8">
                    <div className='md:w-1/2'>
                        <label htmlFor="">Supplier Name</label><br />
                        <input type="text" name='supplier' placeholder="Supplier" defaultValue={supplier}  className="input input-bordered w-full"  />
                    </div>
                    <div className='md:w-1/2 ml-4'>
                        <label htmlFor="">taste</label><br />
                        <input type="text" placeholder="taste" name='taste' defaultValue={taste}  className="input input-bordered w-full" />
                    </div>
                </div>
                {/* form row */}
                <div className="md:flex mb-8">
                    <div className='md:w-1/2'>
                        <label htmlFor="">Category</label><br />
                        <input type="text" name='category' placeholder="Category" defaultValue={category}  className="input input-bordered w-full"  />
                    </div>
                    <div className='md:w-1/2 ml-4'>
                        <label htmlFor="">Details</label><br />
                        <input type="text" placeholder="Details" name='details'  defaultValue={details} className="input input-bordered w-full" />
                    </div>
                </div>
                <div className=" mb-8">
                    <div className=''>
                        <label htmlFor="">Photo URL</label><br />
                        <input type="text" name='photo' placeholder="Photo URL" defaultValue={photo}  className="input input-bordered w-full"  />
                    </div>
                </div>
                <input type="submit" value="update Coffee" className='btn w-full' />
            </form>
        </div>
        </div>
    );
};

export default UpdateCoffee;