"use client";

import * as Checkbox from '@radix-ui/react-checkbox';
import { CheckIcon } from '@radix-ui/react-icons';


const CheckboxDemo = () => (
  <form>
    <div className="flex items-center z-10">
      <Checkbox.Root
        className="bg-white hover:bg-slate-500 flex h-[25px] w-[25px] appearance-none items-center justify-center rounded-[4px] shadow-[0_2px_10px] outline-none focus:shadow-[0_0_0_2px_black]"
        defaultChecked
        id="c1" 
      >
        <Checkbox.Indicator className="text-white">
          <CheckIcon />
        </Checkbox.Indicator>
      </Checkbox.Root>
      <label className="pl-[15px] text-[15px] leading-none text-white" htmlFor="c1">
        Accept terms and conditions.
      </label>
    </div>
  </form>
);

export default CheckboxDemo;