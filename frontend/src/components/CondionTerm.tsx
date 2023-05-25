"use client";

import * as Checkbox from '@radix-ui/react-checkbox';
import { CheckIcon } from '@radix-ui/react-icons';
import { HTMLAttributes, MouseEventHandler, ReactNode } from 'react';

type ConditionTermProps = Omit<HTMLAttributes<HTMLDivElement>, "onClick"> & {
  onClick: () => void
};

const ConditionTerm = ({ children, onClick, ...props }: ConditionTermProps) => (
  <div {...props}>
    <div className="grid grid-cols-[30px_1fr] gap-2 items-start z-10">
      <Checkbox.Root
        className="bg-white hover:brightness-75 hover:bg-slate-400 flex h-[30px] w-[30px] items-center justify-center rounded-[4px] border-white border-2 shadow-[0_0_0_2px_10px] outline-none focus:shadow-[0_0_0_2px_black]"
        id="c1"
        type='button'
        onClick={onClick}
      >
        <Checkbox.Indicator className="text-white">
          <CheckIcon color='white' />
        </Checkbox.Indicator>
      </Checkbox.Root>
      <div className='grid grid-row-2 gap-2'>
        <label className="text-[15px] leading-none text-white" htmlFor="c1">
          Accept terms and conditions. *
        </label>
        <p className='text-[11px] text-white'>{children}</p>
      </div>
    </div>
  </div>
);

export default ConditionTerm;