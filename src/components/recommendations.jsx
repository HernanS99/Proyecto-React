import { db } from '../config/firebase'
import { collection, getDocs } from 'firebase/firestore'
import { useEffect, useState } from "react"

const recommendations = () => {
    return (
        <div class="container">
            <section class="mx-auto my-5" style="max-width: 23rem;">

                <div class="card">
                    <div class="card-body">
                        <blockquote class="blockquote blockquote-custom bg-white px-3 pt-4">
                            <div class="blockquote-custom-icon bg-info shadow-1-strong">
                                <i class="fa fa-quote-left text-white"></i>
                            </div>
                            <p class="mb-0 mt-2 font-italic">
                                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                                incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                                exercitation ullamco laboris nisi ut aliquip ex ea commodo
                                <a href="#" class="text-info">@consequat</a>."
                            </p>
                            <footer class="blockquote-footer pt-4 mt-4 border-top">
                                Someone famous in
                                <cite title="Source Title">Source Title</cite>
                            </footer>
                        </blockquote>
                    </div>
                </div>

            </section>
        </div>
    )
}

export default recommendations