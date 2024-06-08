
import Datasecurity from '@/sections/home/datasecurity'
import Hospitals from '@/sections/home/hospitals'
import Save from '@/sections/home/save'
import Details from '@/sections/usecase1/details'
import Hero from '@/sections/usecase1/hero'
import Manage from '@/sections/usecase1/manage'


import React from 'react'

const Page = () => {
    return (
        <div>
            <Hero />
            <Manage />
            <Hospitals />
            <Save />
            <Details />
            <Datasecurity />
        </div>
    )
}

export default Page
