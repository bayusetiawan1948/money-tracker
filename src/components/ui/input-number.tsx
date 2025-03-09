import React, { useState, useEffect } from 'react';
import { Input } from '@/components/ui/input';
import { formatCurrency } from '@/lib/utils';

interface NumberFieldProps {
  id?: string;
  value?: number;
  onChange?: (value: number) => void;
  showAsCurrency?: boolean;
  error?: string;
}

const NumberField: React.FC<NumberFieldProps> = ({
  error,
  onChange,
  showAsCurrency = false,
  value = 0,
  ...props
}) => {
  const [internalValue, setInternalValue] = useState<string>(value.toString());

  useEffect(() => {
    setInternalValue(value.toString());
  }, [value]);

  // Fungsi untuk menangani perubahan input dan memastikan hanya angka yang diterima
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const rawValue = e.target.value.replace(/\D/g, ''); // Hanya angka
    const numericValue = rawValue ? Number(rawValue) : 0;

    setInternalValue(rawValue); // Tetap menampilkan angka yang diketik

    if (onChange) onChange(numericValue); // Kirim nilai asli (angka) ke parent
  };

  return (
    <div>
      <div className="relative">
        <Input
          inputMode="numeric" // Optimalkan untuk keyboard angka di mobile
          onChange={handleInputChange}
          type="text"
          value={
            showAsCurrency
              ? formatCurrency(Number(internalValue))
              : internalValue
          }
          {...props}
        />
      </div>

      {error && <span className="text-body3 text-red-600">{error}</span>}
    </div>
  );
};

NumberField.displayName = 'NumberField';

export { NumberField };
