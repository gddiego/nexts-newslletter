import React, { useState } from 'react';
import { Link } from 'react-bootstrap/lib/Navbar';
import './_app';
function Home() {

    return (
        <div class="container-fluid gedf-wrapper">
            <div class="col-md-3">
                <div class="card">
                    <div class="card-body">
                        <div class="h5"></div>
                        <div class="h7 text-muted">Seja Bem vindo</div>
                        <div class="h7">Conteudos web applications, JavaScript, PHP, Java, Python, Ruby, Java, Node.js,
                        etc.
                        </div>
                    </div>
                    <ul class="list-group list-group-flush">
                        <li class="list-group-item">
                            <div class="h6 text-muted">Followers</div>
                            <div class="h5">5.2342</div>
                        </li>
                        <li class="list-group-item">
                            <div class="h6 text-muted">Following</div>
                            <div class="h5">6758</div>
                        </li>
                        <li class="list-group-item">....</li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Home;