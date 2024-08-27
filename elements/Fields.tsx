import Button from '@/components/Button';
import { useDAO } from '@/context/DaoContext';
import DAOs, { DAO } from '@/pages/api/DAOs';
import React, { useState } from 'react';

function Fields() {
    const [create, setCreate] = useState(false);
    const [daoName, setDaoName] = useState('');
    const [address, setAddress] = useState('');
    const [fractions, setFractions] = useState('');
    const [share, setShare] = useState('');
    const [isHovered, setIsHovered] = useState(false);
    const { nft, setCreated } = useDAO();

    const [errors, setErrors] = useState({
        daoName: '',
        address: '',
        fractions: '',
        share: '',
    });

    const handleMouseEnter = () => {
        if (!create) setIsHovered(true);
    };

    const handleMouseLeave = () => {
        if (!create) setIsHovered(false);
    };

    const validateFields = () => {
        const newErrors = { ...errors };
        let valid = true;

        newErrors.daoName = daoName.trim() ? '' : 'Required';
        newErrors.address = address.trim() ? '' : 'Required';
        newErrors.fractions = fractions.trim() && !isNaN(parseInt(fractions)) ? '' : 'Must be a valid number';
        newErrors.share = share.trim() && !isNaN(parseInt(share)) ? '' : 'Must be a valid number';

        setErrors(newErrors);

        valid = Object.values(newErrors).every((error) => error === '');

        return valid;
    };

    const handleCreate = () => {
        if (!validateFields()) return;

        const newDAO: DAO = {
            DAOname: daoName,
            address: address,
            asset: nft?.image,
            fractions: parseInt(fractions) || 0,
            share: parseInt(share) || 0,
            count: 1,
            creator: "",
            members: [
                {
                    name: "",
                    address: address,
                },
            ],
        };

        DAOs.push(newDAO);

        setCreate(true);
        setTimeout(() => {
            setCreated(true);
        }, 400);
    };

    const renderInput = (label:any, placeholder:any, value:any, setValue:any, error:any) => (
        <>
            <span>
                <label className='items-start font-sans text-xs'>{label}</label>
                {error && <span className="text-red-800 text-xs font-extralight">* {error}</span>}
            </span>
            <input
                className='rounded bg-transparent focus:outline-none text-xs p-1.5 text-white font-thin 
                border-[0.25px] border-gray-600'
                style={{
                    backgroundImage: 'linear-gradient(180deg, rgba(50, 50, 80, 0.5) 100%, rgba(10,1,1,0.35) 0%)',
                    width: '250px'
                }}
                placeholder={placeholder}
                type='text'
                value={value}
                onChange={(e) => setValue(e.target.value)}
            />
        </>
    );

    return (
        <fieldset className='flex flex-col space-y-0'>
            <legend className='text-center text-xs mb-2'>CREATE YOUR DAO</legend>
            {renderInput('DAO Name', 'Artistic Alliance', daoName, setDaoName, errors.daoName)}
            {renderInput("Address", "Your Solana Wallet's", address, setAddress, errors.address)}
            {renderInput('Fractions', 'Total Number of Shares', fractions, setFractions, errors.fractions)}
            {renderInput('Your Share', 'SOL you willing to invest', share, setShare, errors.share)}
            <div className='flex justify-center w-full pt-1.5'
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
            >
                <Button className='border-[0.25px] border-orange-900 text-center px-8 mt-1.5'
                    onClick={handleCreate}
                    style={{
                        backgroundImage: isHovered
                            ? 'linear-gradient(270deg, rgba(82,0,83,1) -10%, rgba(0,12,15,1) 90%)'
                            : 'linear-gradient(90deg, rgba(82,0,83,1) -10%, rgba(0,12,15,1) 90%)'
                    }}
                    disabled={create}
                >
                    Create
                </Button>
            </div>
        </fieldset>
    );
}

export default Fields;