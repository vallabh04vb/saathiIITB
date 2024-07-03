"use client";

import { useState } from 'react'

import Tabs from '@/components/Tabs'




export default function Detailed() {


    const [activeTab, setActiveTab] = useState('Tab 1')
    const tabsArray = ['Gay/Lesbian', 'Bi/Pan', 'Trans', 'Ace/Aro', 'Non Binary', 'Intersex']



    return (

        <>
              <section className="bg-purple-200 w-full md:h-full snap-start snap-always shrink-0 ">
              <div className="px-5 md:px-24 h-full py-20 2xl:p-32 ">
          <h2 className="text-6xl md:text-7xl mb-12 tracking-tight font-bold">
            Identities in detail
          </h2>
          <div className="flex flex-col md:flex-row justify-between items-center  border-12 ">
          <div className=" rounded-base w-full">
                <Tabs
                    activeTab={activeTab}
                    setActiveTab={setActiveTab}
                    tabsArray={tabsArray}
                />
                <div className="max-w-full rounded-b-base border-2 border-border dark:border-darkBorder bg-white dark:bg-darkBg p-5 font-base">
                    {activeTab === 'Gay/Lesbian' && (
                        <div>
                            <h3>Tab 1</h3>

                            <p className="mt-2">Lorem ipsum dolor sit amet.</p>
                        </div>
                    )}
                    {activeTab === 'Bi/Pan' && (
                        <div>
                            <h3>Tab 2</h3>

                            <p className="mt-2">
                                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                            </p>
                        </div>
                    )}
                    {activeTab === 'Trans' && (
                        <div>
                            <h3>Tab 3</h3>

                            <p className="mt-2">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos,
                                necessitatibus!
                            </p>
                        </div>
                    )}
                    {activeTab === 'Ace/Aro' && (
                        <div>
                            <h3>Tab 1</h3>

                            <p className="mt-2">Lorem ipsum dolor sit amet.</p>
                        </div>
                    )}
                    {activeTab === 'Non Binary' && (
                        <div>
                            <h3>Tab 2</h3>

                            <p className="mt-2">
                                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                            </p>
                        </div>
                    )}
                    {activeTab === 'Intersex' && (
                        <div>
                            <h3>Tab 3</h3>

                            <p className="mt-2">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos,
                                necessitatibus!
                            </p>
                        </div>
                    )}
                </div>
            </div>
            </div>
            </div>



              </section>

        </>


    )
}