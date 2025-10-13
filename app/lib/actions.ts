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
const FormSchema = z.object({
  id: z.string(),
  customerId: z.string(),
  amount: z.coerce.number(),
  status: z.enum(["pending", "paid"]),
  date: z.string(),
});

const CreateInvoicee = FormSchema.omit({ id: true, date: true });

export async function createInvoice(formData: FormData) {
  //   const rawFormData = {
  //     customerId: formData.get("customerId"),
  //     amount: formData.get("amount"),
  //     status: formData.get("status"),
  //   };
  //   console.log(typeof rawFormData.amount);

  const { customerId, amount, status } = CreateInvoicee.parse({
    customerId: formData.get("customerId"),
    amount: formData.get("amount"),
    status: formData.get("status"),
  });
}
