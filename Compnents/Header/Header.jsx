"use client";
import Link from "next/link";
import styles from "./header.module.css";
import { useState } from "react";
import { usePathname } from "next/navigation";

export default function Header() {
  const pathname = usePathname();
  const [activeLink, setActiveLink] = useState(pathname);
  function handleMenu() {
    document.getElementById("MobileMenu").style.width = "100%";
  }
  function closeNav() {
    document.getElementById("MobileMenu").style.width = "0%";
  }
  return (
    <>
      <div className={`${styles.mainDiv}`}>
        <div className={`${styles.col1}`}>
          <svg className="svg-icon" viewBox="0 0 20 20">
            <path
              fill="none"
              d="M17.675,0.62H2.327c-0.942,0-1.706,0.764-1.706,1.706v15.348c0,0.941,0.764,1.705,1.706,1.705h15.348c0.941,0,1.705-0.764,1.705-1.705V2.326C19.38,1.384,18.616,0.62,17.675,0.62 M18.526,17.674c0,0.471-0.381,0.852-0.852,0.852H2.327c-0.471,0-0.853-0.381-0.853-0.852V2.326c0-0.471,0.382-0.853,0.853-0.853h15.348c0.471,0,0.852,0.382,0.852,0.853V17.674zM10.849,7.975c0-0.345,0.035-0.531,0.565-0.531h0.709V6.162h-1.134c-1.364,0-1.844,0.642-1.844,1.721v0.834h-0.85V10h0.85v3.838h1.701V10h1.134l0.151-1.283h-1.285L10.849,7.975z"
            ></path>
          </svg>
          <svg className="svg-icon" viewBox="0 0 20 20">
            <path
              fill="none"
              d="M14.528,6.716c-0.342,0.199-0.721,0.344-1.122,0.422c-0.322-0.338-0.78-0.549-1.288-0.549c-0.977,0-1.767,0.779-1.767,1.738c0,0.136,0.016,0.268,0.046,0.396C8.929,8.65,7.628,7.958,6.757,6.906C6.605,7.164,6.518,7.462,6.518,7.781c0,0.602,0.312,1.135,0.785,1.446C7.014,9.218,6.742,9.14,6.504,9.01c0,0.007,0,0.015,0,0.021c0,0.842,0.609,1.545,1.417,1.705c-0.148,0.039-0.304,0.061-0.465,0.061c-0.114,0-0.225-0.011-0.332-0.031C7.348,11.457,8,11.959,8.772,11.973c-0.605,0.467-1.366,0.744-2.193,0.744c-0.143,0-0.283-0.007-0.421-0.023c0.782,0.493,1.71,0.78,2.707,0.78c3.249,0,5.024-2.648,5.024-4.945c0-0.075-0.001-0.151-0.004-0.225c0.345-0.246,0.645-0.551,0.881-0.9c-0.317,0.138-0.656,0.231-1.014,0.274C14.116,7.462,14.396,7.122,14.528,6.716 M17.778,0.562H2.284c-0.951,0-1.722,0.771-1.722,1.722v15.494c0,0.951,0.771,1.722,1.722,1.722h15.494c0.951,0,1.722-0.771,1.722-1.722V2.284C19.5,1.333,18.729,0.562,17.778,0.562 M18.64,17.778c0,0.476-0.386,0.861-0.861,0.861H2.284c-0.475,0-0.861-0.386-0.861-0.861V2.284c0-0.475,0.386-0.861,0.861-0.861h15.494c0.476,0,0.861,0.386,0.861,0.861V17.778z"
            ></path>
          </svg>
          <svg className="svg-icon" viewBox="0 0 20 20">
            <path
              fill="none"
              d="M9.89,6.182C9.708,6.205,9.528,6.227,9.348,6.25c-0.34,0.084-0.711,0.164-0.986,0.325C7.628,7.004,7.119,7.505,6.779,8.32C6.723,8.452,6.722,8.58,6.681,8.726c-0.261,0.95,0.202,1.934,0.764,2.273c0.108,0.065,0.354,0.182,0.445,0.026c0.05-0.084,0.039-0.198,0.069-0.297c0.02-0.066,0.084-0.189,0.069-0.271c-0.025-0.139-0.174-0.227-0.236-0.338c-0.127-0.227-0.133-0.427-0.195-0.73c0.005-0.041,0.009-0.082,0.014-0.122c0.019-0.34,0.076-0.584,0.181-0.826c0.307-0.708,0.8-1.103,1.597-1.339c0.178-0.054,0.682-0.138,0.945-0.082c0.158,0.027,0.314,0.054,0.472,0.082c0.571,0.179,0.986,0.511,1.208,1.028c0.139,0.322,0.18,0.939,0.083,1.353C12.052,9.679,12.06,9.847,12,10.024c-0.216,0.657-0.532,1.266-1.25,1.435c-0.473,0.112-0.828-0.177-0.945-0.474c-0.032-0.082-0.087-0.229-0.055-0.365c0.125-0.533,0.306-1.011,0.445-1.543c0.132-0.507-0.119-0.907-0.514-1.001c-0.491-0.117-0.871,0.338-1,0.635C8.578,8.949,8.516,9.385,8.598,9.7c0.026,0.1,0.146,0.367,0.125,0.46c-0.094,0.411-0.202,0.854-0.319,1.259c-0.122,0.42-0.188,0.852-0.306,1.258C8.043,12.863,8.046,13.063,8,13.259v0.284c-0.041,0.18-0.01,0.499,0.028,0.676c0.025,0.114-0.014,0.255,0.042,0.339c0,0.061,0.008,0.074,0.027,0.108c0.174-0.005,0.414-0.462,0.5-0.595c0.166-0.255,0.319-0.527,0.445-0.826c0.114-0.268,0.131-0.565,0.222-0.853c0.065-0.207,0.158-0.448,0.18-0.676h0.014C9.495,11.841,9.625,11.931,9.723,12c0.306,0.218,0.832,0.42,1.402,0.285c0.646-0.153,1.161-0.456,1.501-0.907c0.249-0.332,0.438-0.715,0.583-1.15c0.071-0.213,0.086-0.45,0.14-0.676c0.131-0.568-0.045-1.251-0.209-1.624C12.641,6.8,11.581,6.158,9.89,6.182 M17.636,0.667H2.364c-0.938,0-1.697,0.76-1.697,1.697v15.272c0,0.938,0.76,1.697,1.697,1.697h15.272c0.938,0,1.697-0.76,1.697-1.697V2.364C19.333,1.426,18.573,0.667,17.636,0.667M18.484,17.636c0,0.469-0.38,0.849-0.849,0.849H2.364c-0.469,0-0.849-0.38-0.849-0.849V2.364c0-0.469,0.38-0.849,0.849-0.849h15.272c0.469,0,0.849,0.38,0.849,0.849V17.636z"
            ></path>
          </svg>
        </div>
        <div className={`${styles.col2}`}>Rana Qasid's Blog</div>
        <div className={`${styles.col3}`}>
          <div className={`${styles.Nav}`}>
            <Link
              onClick={() => {
                setActiveLink("/home");
              }}
              className={`${styles.navLinks} ${
                activeLink === "/home" ? "activeLink" : ""
              }`}
              href="/"
            >
              Home
            </Link>
            <Link
              onClick={() => {
                setActiveLink("/about");
              }}
              className={`${styles.navLinks} ${
                activeLink === "/about" ? "activeLink" : ""
              }`}
              href="/about"
            >
              About Us
            </Link>
            <Link
              onClick={() => {
                setActiveLink("/contact");
              }}
              className={`${styles.navLinks} ${
                activeLink === "/contact" ? "activeLink" : ""
              }`}
              href="/contact"
            >
              Contact Us
            </Link>
            <Link
              onClick={() => {
                setActiveLink("/blogs");
              }}
              className={`${styles.navLinks} ${
                activeLink === "/blogs" ? "activeLink" : ""
              }`}
              href="/blogs"
            >
              Blogs
            </Link>
          </div>
        </div>
        <div className={`${styles.col4}`}>
          <div className={`${styles.burger}`} onClick={handleMenu}>
            <div></div>
            <div></div>
            <div></div>
          </div>
          <div className={`${styles.MobileMenu}`} id="MobileMenu">
            <div className={`${styles.mobileMenuDiv}`}>
              <div className={`${styles.closebtn}`} onClick={closeNav}>
                &times;
              </div>
              <div className={`${styles.MobileNav}`}>
                <div className={`${styles.NavM}`}>
                  <Link
                    onClick={closeNav}
                    className={`${styles.navLinksM}`}
                    href="/"
                  >
                    Home
                  </Link>
                  <Link
                    onClick={closeNav}
                    className={`${styles.navLinksM}`}
                    href="/about"
                  >
                    About Us
                  </Link>
                  <Link
                    onClick={closeNav}
                    className={`${styles.navLinksM}`}
                    href="/contact"
                  >
                    Contact Us
                  </Link>
                  <Link
                    onClick={closeNav}
                    className={`${styles.navLinksM}`}
                    href="/blogs"
                  >
                    Blogs
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
