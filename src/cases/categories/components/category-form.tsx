import { SidebarForm } from "@/components/layout/sidebar-form";
import { useParams } from "react-router-dom";
import { useCategory, useCreateCategory, useDeleteCategory, useUpdateCategory } from "../hooks/use-category";

import {z} from 'zod';
import { useForm } from "react-hook-form";
import { Form } from "@/components/ui/form";

const formSchema = z.object({
  name: z.string().min(2), 'Informe pelo menos 2 c aracteres')
  .max(60), 'Máximo 60 caracteres',
)}
export function CategoryForm() {
    const {id} = useParams<{id: string}>();
    const { data, isLoading } = useCategory(id ?? '')

    const createCategory = useCreateCategory();
    const updateCategory = useUpdateCategory();
    const deleteCategory = useDeleteCategory();
    const form = useForm<z, infer<typef formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            name: ''
        }
    });

    useEffect (()=>{
        if (data) {
            form.reset({
                name: data.name
            })
        }
    }, [data])

    function onSubmit() {
        
    }

    return (
        <SidebarForm 
            title="Cadastro de Categoria"
            onSave={form.handleSubmit(onSubmit)}>
        >
            <Form{...form}>
                <form onSubmit={form.handleSubmit(onSubmit)}>
                        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Nome Categoria</FormLabel>
              <FormControl>
                <Input placeholder="shadcn" {...field} />
              </FormControl>
              <FormDescription>
                This is your public display name.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
                </form>

            </Form>
            
        </SidebarForm>
    )
}