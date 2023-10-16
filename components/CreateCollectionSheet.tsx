import React from 'react';
import { Sheet, SheetContent } from './ui/sheet';

interface Props {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const CreateCollectionSheet = ({ open, onOpenChange }: Props) => {
  return (
    <Sheet open={open} onOpenChange={onOpenChange}>
      <SheetContent>test</SheetContent>
    </Sheet>
  );
};

export default CreateCollectionSheet;
