import React from 'react';
import HeaderNumbers from './HeaderNumbers';
import './Header.css';

const Header = () => {
    return (
        <header>
        <p class="hello bold">Hello There!</p>
        <h2 class="mainHeadline">We Are Glint</h2>
        <p class="headerText">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia, deleniti. Ab illum quasi quia alias. Totam voluptas tempora vitae unde aliquam quam dolores, sunt non saepe porro laboriosam reiciendis cum nostrum amet esse alias inventore, tempore repellendus aspernatur obcaecati optio atque exercitationem facere similique. Pariatur laboriosam dolor iste maxime perspiciatis modi, saepe reiciendis commodi sed, temporibus quae tenetur fugit voluptatum incidunt neque dolores? Amet dignissimos deserunt eius iste maiores repudiandae facere, odit dolor ipsa cupiditate quas sequi ut, est voluptates. Est hic expedita quo nam consequuntur tempora possimus ullam necessitatibus nesciunt! Sed obcaecati ullam accusantium fuga, quibusdam debitis hic ducimus!</p>
        <section>
          <HeaderNumbers />
          <HeaderNumbers />
          <HeaderNumbers />
          <HeaderNumbers />
        </section>
        </header>

      );
}

export default Header;