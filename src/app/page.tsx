"use client"

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarStyleCentered from '@/components/navbar/NavbarStyleCentered/NavbarStyleCentered';
import HeroShowcaseSplitOverlay from '@/components/sections/hero/HeroShowcaseSplitOverlay';
import InlineImageSplitTextAbout from '@/components/sections/about/InlineImageSplitTextAbout';
import ProductCardSeven from '@/components/sections/product/ProductCardSeven';
import TestimonialCardTwelve from '@/components/sections/testimonial/TestimonialCardTwelve';
import ContactText from '@/components/sections/contact/ContactText';
import FooterLogoEmphasis from '@/components/sections/footer/FooterLogoEmphasis';

export default function LandingPage() {
  return (
    <ThemeProvider
      defaultButtonVariant="text-stagger"
      defaultTextAnimation="reveal-blur"
      borderRadius="pill"
      contentWidth="medium"
      sizing="mediumSizeExtraLargeSpacing"
      background="none"
      cardStyle="shadow-colored"
      primaryButtonStyle="flat"
      secondaryButtonStyle="glass"
      headingFontWeight="bold"
    >
      <div id="nav" data-section="nav">
        <NavbarStyleCentered 
          navItems={[
            { name: "Home", id: "home" },
            { name: "About", id: "about" },
            { name: "Menu", id: "products" },
            { name: "Reviews", id: "testimonials" },
            { name: "Contact", id: "contact" }
          ]}
          button={{ text: "Reserve", href: "contact" }}
          brandName="Coffee House"
          logoSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_30ordogEOn7VO6LZdIWb5atLXky/uploaded-1766057059072-m6p3zcqw.jpg"
          logoAlt="Coffee House logo"
        />
      </div>

      <div id="hero" data-section="hero">
        <HeroShowcaseSplitOverlay
          title="Craft Your Perfect Cup"
          description="Experience artisan coffee culture at its finest. Ethically sourced beans roasted to perfection daily."
          tags={["Specialty Espresso", "Single Origin", "Pour Over", "Sustainable"]}
          buttons={[
            { text: "Explore Menu", href: "products" },
            { text: "Visit Us", href: "contact" }
          ]}
          showcaseImageSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_30ordogEOn7VO6LZdIWb5atLXky/uploaded-1766057061411-2kjy9ldw.jpg"
          showcaseImageAlt="Coffee shop interior showcase"
          imageSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_30ordogEOn7VO6LZdIWb5atLXky/uploaded-1766057061411-2kjy9ldw.jpg"
          imageAlt="Premium coffee shop atmosphere"
          showDimOverlay={true}
        />
      </div>

      <div id="about" data-section="about">
        <InlineImageSplitTextAbout
          heading={[
            { type: "text", content: "We brew more than just" },
            { type: "image", src: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_30ordogEOn7VO6LZdIWb5atLXky/uploaded-1766057063425-pihaexf3.jpg", alt: "Coffee beans" },
            { type: "text", content: "coffee. We create moments of connection and joy." }
          ]}
          buttons={[
            { text: "Our Story", href: "#" }
          ]}
          useInvertedBackground="noInvert"
        />
      </div>

      <div id="products" data-section="products">
        <ProductCardSeven
          title="Featured Selection"
          description="Hand-picked coffee selections roasted fresh weekly"
          products={[
            {
              id: "1",
              name: "Espresso Excellence",
              price: "$4.50",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_30ordogEOn7VO6LZdIWb5atLXky/uploaded-1766057065571-lp9vnq3y.jpg",
              imageAlt: "Espresso shot"
            },
            {
              id: "2",
              name: "Cappuccino Classic",
              price: "$5.25",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_30ordogEOn7VO6LZdIWb5atLXky/uploaded-1766057066720-6d5y6gdq.jpg",
              imageAlt: "Cappuccino with latte art"
            },
            {
              id: "3",
              name: "Cold Brew Refresh",
              price: "$5.00",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_30ordogEOn7VO6LZdIWb5atLXky/uploaded-1766057068033-ypuklaqx.jpg",
              imageAlt: "Cold brew iced coffee"
            }
          ]}
          gridVariant="uniform-all-items-equal"
          animationType="slide-up"
          containerStyle="default"
          textboxLayout="default"
          useInvertedBackground="noInvert"
        />
      </div>

      <div id="testimonials" data-section="testimonials">
        <TestimonialCardTwelve
          testimonials={[
            {
              id: "1",
              name: "Sarah Mitchell",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_30ordogEOn7VO6LZdIWb5atLXky/uploaded-1766057070167-6sybfte3.jpg",
              imageAlt: "Sarah Mitchell"
            },
            {
              id: "2",
              name: "James Chen",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_30ordogEOn7VO6LZdIWb5atLXky/uploaded-1766057071452-gskwve8q.jpg",
              imageAlt: "James Chen"
            },
            {
              id: "3",
              name: "Emma Rodriguez",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_30ordogEOn7VO6LZdIWb5atLXky/uploaded-1766057072826-v5j5p27g.jpg",
              imageAlt: "Emma Rodriguez"
            },
            {
              id: "4",
              name: "Michael Anderson",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_30ordogEOn7VO6LZdIWb5atLXky/uploaded-1766057075117-jxdkuad4.jpg",
              imageAlt: "Michael Anderson"
            }
          ]}
          cardTitle="Trusted by coffee enthusiasts across the community"
          cardTag="See what they say"
          useInvertedBackground="noInvert"
        />
      </div>

      <div id="contact" data-section="contact">
        <ContactText
          text="Ready to experience your perfect cup? Stop by today or reserve your spot for a special tasting."
          animationType="entrance-slide"
          buttons={[
            { text: "Reserve a Table", href: "#" },
            { text: "Get in Touch", href: "#" }
          ]}
          useInvertedBackground="noInvert"
        />
      </div>

      <div id="footer" data-section="footer">
        <FooterLogoEmphasis
          logoText="Coffee House"
          columns={[
            {
              items: [
                { label: "Home", href: "home" },
                { label: "Menu", href: "products" },
                { label: "About", href: "about" }
              ]
            },
            {
              items: [
                { label: "Contact", href: "contact" },
                { label: "Reserve", href: "contact" },
                { label: "Events", href: "#" }
              ]
            },
            {
              items: [
                { label: "Privacy", href: "#" },
                { label: "Terms", href: "#" },
                { label: "Sustainability", href: "#" }
              ]
            }
          ]
        />
      </div>
    </ThemeProvider>
  );
}