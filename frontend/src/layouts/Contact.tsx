"use client";

import { HTMLAttributes, useRef } from 'react';

import Image from 'next/image';

import { FONTS_STYLED } from '@/constants/fonts';
import { ERRORS_CONTACT } from '@/constants/errors';

// import { Button, CondionTerm, FormError } from '@/components';
import Button from '@/components/Button';
import ConditionTerm from '@/components/CondionTerm';
import FormError from '@/components/FormError';

import { useContactForm } from '@/hooks/useContactForm';
import { useIntersectionObserver } from '@/hooks/useIntersectionObserver';
import useMobile from '@/hooks/useMobile';
import useLoad from '@/hooks/useLoad';


type ContactProps = HTMLAttributes<HTMLDivElement>

export default function Contact({ className, ...props }: ContactProps) {
  const nameRef = useRef(null);
  const image1Ref = useRef<HTMLImageElement>(null!)
  const image2Ref = useRef<HTMLImageElement>(null!)

  const image1 = useLoad(image1Ref);
  const image2 = useLoad(image2Ref);

  const {
    isSubmitting,
    formRef,
    handleOnSubmit,
    handleInputName,
    handleInputEmail,
    handleInputPhone,
    handleTermCLick,
    handleFormErrors
  } = useContactForm();

  const [
    isVisualized1,
  ] = useIntersectionObserver(nameRef);

  const isMobile = useMobile("md");

  console.log("Status of loaded image1: " + image1.isLoaded);
  console.log("Status of loaded image2: " + image2.isLoaded);



  return (
    <div
      className={`${className} grid shadow-[0px_0px_0px_100vmax_#7d8f69] h-auto p-10 clip-around grid-col-1 w-full my-16 bg-secondary`}
      {...props}
    >
      <div className='grid lg:grid-cols-2 lg:grid-rows-1 my-auto sm:grid sm:grid-rows-2 md:grid md:grid-rows-2'>
        <div className='w-[600px] sm:mx-auto sm:order-2 md:mx-auto md:order-2 lg:order-1 '>
          <h1
            className="text-white flex-[7] mb-4"
            style={FONTS_STYLED.h1}
          >
            Stay tuned for our news
          </h1>
          <form ref={formRef} onSubmit={handleOnSubmit} className="flex-[5] w-[520px]" action="">
            <div className='mb-4'>
              <label className='mb-2 block text-white' htmlFor="user-name">First Name *</label>
              <input
                ref={nameRef}
                name='user-name'
                type="text"
                required
                maxLength={20}
                aria-label='name input'
                onChange={handleInputName}
                className='block px-5 py-3 w-full rounded-lg duration-1000'
                placeholder='First Name'
                style={!isMobile ? {
                  transform: `translateX(${isVisualized1 ? 0 : -100}%)`,
                  opacity: `${isVisualized1 ? 1 : 0}`,
                  filter: `blur(${isVisualized1 ? 0 : 10}px)`
                } : {}}
              />
              <FormError error={handleFormErrors(ERRORS_CONTACT.EMPTY_NAME_INPUT)} />
            </div>
            <div className='grid grid-cols-4 gap-4 w-full mb-8 relative'>
              <div className='col-span-2'>
                <label className='mb-2 text-white' htmlFor="user-email">Email Address</label>
                <input
                  name='user-email'
                  aria-label='email input'
                  maxLength={50}
                  onChange={handleInputEmail}
                  pattern="[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}"
                  className='mt-2 px-5 py-3 w-full rounded-lg duration-1000'
                  placeholder="name@mail.com"
                  type="email"
                  style={isMobile ? {
                    transform: `translateX(${isVisualized1 ? 0 : -100}%)`,
                    opacity: `${isVisualized1 ? 1 : 0}`,
                    filter: `blur(${isVisualized1 ? 0 : 10}px)`
                  } : {}}
                />
                <FormError error={handleFormErrors(ERRORS_CONTACT.WRONG_EMAIL_FORMAT)} />
              </div>
              <div className='col-span-2'>
                <label className='mb-2 text-white' htmlFor="">Phone Number</label>
                <input
                  name='user-phone'
                  aria-label='phone input'
                  className='mt-2 px-5 py-3 w-full rounded-lg duration-1000 delay-200'
                  onChange={handleInputPhone}
                  placeholder="(99) 9 9999-9999"
                  maxLength={11}
                  type="tel"
                  style={!isMobile ? {
                    transform: `translateX(${isVisualized1 ? 0 : -100}%)`,
                    opacity: `${isVisualized1 ? 1 : 0}`,
                    filter: `blur(${isVisualized1 ? 0 : 10}px)`
                  } : {}}
                />
                <FormError error={handleFormErrors(ERRORS_CONTACT.WRONG_PHONE_FORMAT)} />
                <FormError className="row-span-4 text-left fixed left-0" error={handleFormErrors(ERRORS_CONTACT.EMPTY_CONTACT_INPUTS)} />
              </div>
            </div>
            <div className='mb-8'>
              <FormError error={handleFormErrors(ERRORS_CONTACT.ACCEPT_TERMS_AND_CONDITIONS)} />
              <ConditionTerm onClick={handleTermCLick} >
                By checking the box, you acknowledge that you have read and understood
                the terms of the LGPD license, and you agree to comply with its
                conditions. If you do not agree to these terms, please refrain from
                using our services.
              </ConditionTerm>
              <FormError error={handleFormErrors(ERRORS_CONTACT.PHONE_OR_EMAIL_SIGNED)} />
            </div>
            <Button disabled={isSubmitting} className='w-full bg-primary disabled:brightness-75' variant='cta'>
              {isSubmitting ? "Submitting..." : "Submit"}
            </Button>
          </form>
        </div>
        <div aria-label='items' className='flex-[1] relative sm:order-1 lg:order-2 md:order-1'>
          <div className='bg-primary w-[216px] h-[281px] absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2'>
            <div
              className="absolute w-[215px] h-[215px] bg-center object-cover top-[129px] right-[96px] bg-cover"
              style={{ backgroundImage: `url(/benefits/fallback/4.jpg)` }}
            >
              <Image
                className={`w-full h-full duration-1000 bg-cover bg-center object-cover ${image1.isLoaded ? "opacity-100" : "opacity-0"}`}
                ref={image1Ref}
                src="/benefits/4.jpg"
                alt='Plant image'
                width={356}
                height={384}
                loading='lazy'
                onLoad={image1.handleImageLoad}
              />
            </div>
            <div
              className={`absolute w-[215px] h-[215px] bg-center object-cover bottom-[204px] left-[128px] bg-cover`}
              style={{ backgroundImage: `url(/benefits/fallback/3.jpg)` }}
            >
              <Image
                className={`w-full h-full duration-1000 bg-cover bg-center object-cover ${image2.isLoaded ? "opacity-100" : "opacity-0"}`}
                ref={image2Ref}
                src="/benefits/3.jpg"
                alt='Plant image'
                width={280}
                height={280}
                loading='lazy'
                onLoad={image2.handleImageLoad}
              />
            </div>
          </div>
        </div>
      </div>
    </div >
  )
}