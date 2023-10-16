import React from 'react';
import { Sheet, SheetContent, SheetDescription, SheetTitle } from './ui/sheet';
import { useForm } from 'react-hook-form';
import {
  createCollectionSchema,
  createCollectionSchemaType,
} from '@/schema/createCollection';
import { zodResolver } from '@hookform/resolvers/zod';
interface Props {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const CreateCollectionSheet = ({ open, onOpenChange }: Props) => {
  const form = useForm<createCollectionSchemaType>({
    defaultValues: {},
    resolver: zodResolver(createCollectionSchema),
  });
    
  return (
    <Sheet open={open} onOpenChange={onOpenChange}>
      <SheetContent>
        <SheetTitle>Add new collection</SheetTitle>
        <SheetDescription>
          Collections are a way to group your tasks
        </SheetDescription>
      </SheetContent>
    </Sheet>
  );
};

export default CreateCollectionSheet;
