"use server";
// import { z } from 'zod';

// const FormSchema = z.object({
//   id: z.string(),
//   customerId: z.string(),
//   amount: z.coerce.number(),
//   status: z.enum(['pending', 'paid']),
//   date: z.string(),
// });

import { z } from "zod";
// https://www.npmjs.com/package/zod and //https://zod.dev/
//define a zod schema
const FormSchema = z.object({
  id: z.string(),
  customerId: z.string(),
  amount: z.coerce.number(),
  status: z.enum(["pending", "paid"]),
  date: z.string(),
});
//https://v3.zod.dev/?id=pickomit  omit means skip/ignore during validation
const CreateInvoicee = FormSchema.omit({ id: true, date: true });

export async function createInvoice(formData: FormData) {
  //   const rawFormData = {
  //     customerId: formData.get("customerId"),
  //     amount: formData.get("amount"),
  //     status: formData.get("status"),
  //   };
  //   console.log(typeof rawFormData.amount);

  //Given any Zod schema 'FormSchema', use .parse to validate an input
  //When validation fails, the .parse() method will throw a ZodError
  const { customerId, amount, status } = CreateInvoicee.parse({
    customerId: formData.get("customerId"),
    amount: formData.get("amount"),
    status: formData.get("status"),
  });
}
