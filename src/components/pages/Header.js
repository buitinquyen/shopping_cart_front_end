import './css/bootstrap.min.css';
import './css/magnific-popup.css';
import './css/owl.carousel.css';
import './css/responsive.css';
import './css/style.css';

export default function Header() {
    return (
        
        <div class="header-top">
            
            <div class="container">
                <div class="row">
                    <div class="col-sm-8 col-xs-12">
                        <div class="header-links">
                            <ul class="nav navbar-nav pull-left">
                                <li>
                                    <a href="index.html">
                                        <i class="fa fa-home hidden-lg hidden-md" title="Home"></i>
                                        <span class="hidden-sm hidden-xs">
                                            Home
                                        </span>
                                    </a>
                                </li>
                                <li>
                                    <a href="#">
                                        <i class="fa fa-heart hidden-lg hidden-md" title="Wish List"></i>
                                        <span class="hidden-sm hidden-xs">
                                            Wish List(0)
                                        </span>
                                    </a>
                                </li>
                                <li>
                                    <a href="#">
                                        <i class="fa fa-user hidden-lg hidden-md" title="My Account"></i>
                                        <span class="hidden-sm hidden-xs">
                                            My Account
                                        </span>
                                    </a>
                                </li>
                                <li>
                                    <a href="cart.html">
                                        <i class="fa fa-shopping-cart hidden-lg hidden-md" title="Shopping Cart"></i>
                                        <span class="hidden-sm hidden-xs">
                                            Shopping Cart
                                        </span>
                                    </a>
                                </li>
                                <li>
                                    <a href="#">
                                        <i class="fa fa-crosshairs hidden-lg hidden-md" title="Checkout"></i>
                                        <span class="hidden-sm hidden-xs">
                                            Checkout
                                        </span>
                                    </a>
                                </li>
                                <li>
                                    <a href="register.html">
                                        <i class="fa fa-unlock hidden-lg hidden-md" title="Register"></i>
                                        <span class="hidden-sm hidden-xs">
                                            Register
                                        </span>
                                    </a>
                                </li>
                                <li>
                                    <a href="login.html">
                                        <i class="fa fa-lock hidden-lg hidden-md" title="Login"></i>
                                        <span class="hidden-sm hidden-xs">
                                            Login
                                        </span>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div class="col-sm-4 col-xs-12">
                        <div class="pull-right">
                            <div class="btn-group">
                                <button class="btn btn-link dropdown-toggle" data-toggle="dropdown">
                                    Currency
                                    <i class="fa fa-caret-down"></i>
                                </button>
                                <ul class="pull-right dropdown-menu">
                                    <li><a tabindex="-1" href="#">Pound </a></li>
                                    <li><a tabindex="-1" href="#">US Dollar</a></li>
                                    <li><a tabindex="-1" href="#">Euro</a></li>
                                </ul>
                            </div>
                            <div class="btn-group">
                                <button class="btn btn-link dropdown-toggle" data-toggle="dropdown">
                                    Language
                                    <i class="fa fa-caret-down"></i>
                                </button>
                                <ul class="pull-right dropdown-menu">
                                    <li>
                                        <a tabindex="-1" href="#">English</a>
                                    </li>
                                    <li>
                                        <a tabindex="-1" href="#">French</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )

}