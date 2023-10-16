import React from 'react';
import { Sheet, SheetContent, SheetDescription, SheetTitle } from './ui/sheet';

interface Props {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const CreateCollectionSheet = ({ open, onOpenChange }: Props) => {
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
