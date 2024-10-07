import { headers } from "next/headers"
import Link from "next/link"

export default function Home () {
  return  <div>
       <nav>
        <ul>
          <li><Link href="/about">About</Link></li>
          <li><Link href="/contact">Contact</Link></li>
          <li><Link href="/services">Services</Link></li>
          <li><Link href="contact/contact-us">contact us</Link></li>



        </ul>
       </nav>

      <h1>
          Welcome to my Home page
      </h1>
      <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatum quos exercitationem praesentium, fugiat dicta eos corporis vero, eveniet aspernatur tempore ex assumenda nobis nihil perspiciatis, rerum dolorem autem quia repudiandae laboriosam delectus ducimus libero dolorum eaque? Sint accusantium itaque quaerat ipsam? Iusto fugiat molestiae reiciendis.</p>
      
  </div>
  
}


