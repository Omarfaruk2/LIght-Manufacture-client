import React from 'react'
import {
    Accordion,
    AccordionItem,
    AccordionItemHeading,
    AccordionItemButton,
    AccordionItemPanel,
} from 'react-accessible-accordion'
// Demo styles, see 'Styles' section below for some notes on use.
import 'react-accessible-accordion/dist/fancy-example.css'

const Blogs = () => {
    return (
        <div className='w-4/5 mx-auto'>
            <Accordion>
                <AccordionItem>
                    <AccordionItemHeading>
                        <AccordionItemButton>
                            How will you improve the performance of a React Application?
                        </AccordionItemButton>
                    </AccordionItemHeading>
                    <AccordionItemPanel>
                        <b>
                            React applications, I am guaranteed a very fast UI by default. However, as an application grows, developers may encounter some performance issues.

                            In this guide, we will discuss five important ways to optimize the performance of a React application, including pre-optimization techniques.
                            Before optimizing a React application, we must understand how React updates its UI and how to measure an app’s performance. This makes it easy to solve any React performance problems.

                        </b>
                    </AccordionItemPanel>
                </AccordionItem>
                {/* ----------------------------------------------------------------------------------------------- */}
                <AccordionItem>
                    <AccordionItemHeading>
                        <AccordionItemButton>
                            What are the different ways to manage a state in a React application?
                        </AccordionItemButton>
                    </AccordionItemHeading>
                    <AccordionItemPanel>
                        <b>There are four main types of state We need to properly manage in your React apps:</b>
                        <li>Local state.</li>
                        <li>Global state.</li>
                        <li>Server state.</li>
                        <li>URL state.</li>
                    </AccordionItemPanel>
                </AccordionItem>
                {/* ------------------------------------------------------------------------ */}
                <AccordionItem>
                    <AccordionItemHeading>
                        <AccordionItemButton>
                            How does prototypical inheritance work?
                        </AccordionItemButton>
                    </AccordionItemHeading>
                    <AccordionItemPanel>
                        <b>
                            The Prototypal Inheritance is a feature in javascript used to add methods and properties in objects. It is a method by which an object can inherit the properties and methods of another object. Traditionally, in order to get and set the [[Prototype]] of an object, we use Object. getPrototypeOf and Object
                        </b>
                    </AccordionItemPanel>
                </AccordionItem>

                <AccordionItem>
                    <AccordionItemHeading>
                        <AccordionItemButton>
                            You have an array of products. Each product has a name, price, description, etc. How will you implement a search to find products by name?
                        </AccordionItemButton>
                    </AccordionItemHeading>
                    <AccordionItemPanel>
                        <b>
                            Each product has a name, price, description, etc. How I Shall  implement a search to find products by name by using filter and position of index....
                        </b>
                    </AccordionItemPanel>
                </AccordionItem>

                <AccordionItem>
                    <AccordionItemHeading>
                        <AccordionItemButton>
                            What is a unit test? Why should write unit tests?
                        </AccordionItemButton>
                    </AccordionItemHeading>
                    <AccordionItemPanel>
                        <b>
                            Unit tests are typically tests written and run by software developers to ensure that a section of an application meets its design and behaves as intended. In procedural programming, a unit could be an entire module, but it is more commonly an individual function or period.                        </b>
                    </AccordionItemPanel>
                </AccordionItem>

            </Accordion>
        </div>
    )
}

export default Blogs
