import './css/bootstrap.min.css';
import './css/magnific-popup.css';
import './css/owl.carousel.css';
import './css/responsive.css';
import './css/style.css';

export default function Header() {
    return (
        <div>
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
            <div class="main-header">
                <div class="container">
                    <div class="row">
                        <div class="col-md-3">
                            <div id="search">
                                <div class="input-group">
                                    <input type="text" class="form-control input-lg" placeholder="Search"/>
                                        <span class="input-group-btn">
                                            <button class="btn btn-lg" type="button">
                                                <i class="fa fa-search"></i>
                                            </button>
                                        </span>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-6">
                            <div id="logo">
                                <a href="index.html"><img src={process.env.PUBLIC_URL + '/logo.png'} title="Spice Shoppe" alt="Spice Shoppe" class="img-responsive" /></a>
                            </div>
                        </div>
                        <div class="col-md-3">
                            <div id="cart" class="btn-group btn-block">
                                <button type="button" data-toggle="dropdown" class="btn btn-block btn-lg dropdown-toggle">
                                    <i class="fa fa-shopping-cart"></i>
                                    <span class="hidden-md">Cart:</span>
                                    <span id="cart-total">2 item(s) - $340.00</span>
                                    <i class="fa fa-caret-down"></i>
                                </button>
                                <ul class="dropdown-menu pull-right">
                                    <li>
                                        <table class="table hcart">
                                            <tr>
                                                <td class="text-center">
                                                    <a href="product.html">
                                                        <img src="images/product-images/hcart-thumb1.jpg" alt="image" title="image" class="img-thumbnail img-responsive" />
                                                    </a>
                                                </td>
                                                <td class="text-left">
                                                    <a href="product-full.html">
                                                        Seeds
                                                    </a>
                                                </td>
                                                <td class="text-right">x 1</td>
                                                <td class="text-right">$120.68</td>
                                                <td class="text-center">
                                                    <a href="#">
                                                        <i class="fa fa-times"></i>
                                                    </a>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td class="text-center">
                                                    <a href="product.html">
                                                        <img src="images/product-images/hcart-thumb2.jpg" alt="image" title="image" class="img-thumbnail img-responsive" />
                                                    </a>
                                                </td>
                                                <td class="text-left">
                                                    <a href="product-full.html">
                                                        Organic
                                                    </a>
                                                </td>
                                                <td class="text-right">x 2</td>
                                                <td class="text-right">$240.00</td>
                                                <td class="text-center">
                                                    <a href="#">
                                                        <i class="fa fa-times"></i>
                                                    </a>
                                                </td>
                                            </tr>
                                        </table>
                                    </li>
                                    <li>
                                        <table class="table table-bordered total">
                                            <tbody>
                                                <tr>
                                                    <td class="text-right"><strong>Sub-Total</strong></td>
                                                    <td class="text-left">$1,101.00</td>
                                                </tr>
                                                <tr>
                                                    <td class="text-right"><strong>Eco Tax (-2.00)</strong></td>
                                                    <td class="text-left">$4.00</td>
                                                </tr>
                                                <tr>
                                                    <td class="text-right"><strong>VAT (17.5%)</strong></td>
                                                    <td class="text-left">$192.68</td>
                                                </tr>
                                                <tr>
                                                    <td class="text-right"><strong>Total</strong></td>
                                                    <td class="text-left">$1,297.68</td>
                                                </tr>
                                            </tbody>
                                        </table>
                                        <p class="text-right btn-block1">
                                            <a href="cart.html">
                                                View Cart
                                            </a>
                                            <a href="#">
                                                Checkout
                                            </a>
                                        </p>
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