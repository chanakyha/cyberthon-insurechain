"use client";

import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "./ui/form";
import { Input } from "./ui/input";
import { Button } from "./ui/button";

const formSchema = z.object({
  hospitalName: z.string().min(2).max(50),
  dischargeSummary: z.string(),
  identityProof: z.string(),
  medicalBills: z.string(),
  medicalCertificate: z.string(),
  claimAmount: z.number(),
});

const ClaimForm = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      hospitalName: "",
      dischargeSummary: "",
      identityProof: "",
      medicalBills: "",
      medicalCertificate: "",
      claimAmount: 0,
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
  }

  return (
    <div>
      <h1 className="my-4 font-medium text-xl md:text-2xl ">
        Please enter the necessary details given below
      </h1>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="gap-8 grid grid-cols-1 md:grid-cols-2"
        >
          <FormField
            control={form.control}
            name="hospitalName"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Hospital Name</FormLabel>
                <FormControl>
                  <Input placeholder="MIOT Hospital" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="dischargeSummary"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Discharge Summary</FormLabel>
                <FormControl>
                  <Input type="file" placeholder="" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="identityProof"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Identify Proof</FormLabel>
                <FormControl>
                  <Input type="file" placeholder="" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="dischargeSummary"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Medical Bills</FormLabel>
                <FormControl>
                  <Input type="file" placeholder="" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="medicalCertificate"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Medical Certificate</FormLabel>
                <FormControl>
                  <Input type="file" placeholder="" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="claimAmount"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Claim Amount</FormLabel>
                <FormControl>
                  <Input type="number" placeholder="" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <Button type="submit" className="w-full md:w-fit">
            Submit
          </Button>
        </form>
      </Form>
    </div>
  );
};

export default ClaimForm;
