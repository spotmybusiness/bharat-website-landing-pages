/**
 * Phone and Form Validation Utilities for Bharat Relocators
 */

export interface PhoneValidationResult {
  isValid: boolean;
  error?: string;
  cleanNumber?: string;
}

/**
 * Sanitizes an Indian mobile phone number by removing spaces, dashes,
 * parentheses, and standard country prefixes (+91, 91, leading 0).
 */
export function sanitizeIndianPhone(input: string): string {
  let cleaned = input.trim().replace(/[\s\-()]/g, '');

  if (cleaned.startsWith('+91')) {
    cleaned = cleaned.substring(3);
  } else if (cleaned.startsWith('91') && cleaned.length === 12) {
    cleaned = cleaned.substring(2);
  } else if (cleaned.startsWith('0') && cleaned.length === 11) {
    cleaned = cleaned.substring(1);
  }

  return cleaned;
}

/**
 * Validates a 10-digit Indian mobile number format.
 * Valid Indian mobile numbers are 10 digits and start with 6, 7, 8, or 9.
 */
export function validateIndianPhone(input: string): PhoneValidationResult {
  const trimmed = input.trim();

  if (!trimmed) {
    return { isValid: false, error: 'Phone number is required.' };
  }

  const cleaned = sanitizeIndianPhone(trimmed);

  if (!/^\d+$/.test(cleaned)) {
    return { isValid: false, error: 'Phone number should contain only digits.' };
  }

  if (cleaned.length !== 10) {
    return {
      isValid: false,
      error: 'Please enter a valid 10-digit mobile number.',
    };
  }

  if (!/^[6-9]/.test(cleaned)) {
    return {
      isValid: false,
      error: 'Indian mobile numbers must start with 6, 7, 8, or 9.',
    };
  }

  return { isValid: true, cleanNumber: cleaned };
}

/**
 * Validates standard text fields for non-empty trimmed content.
 */
export function validateRequiredText(
  value: string,
  fieldName: string,
  minLength = 2
): { isValid: boolean; error?: string } {
  const trimmed = value.trim();

  if (!trimmed) {
    return { isValid: false, error: `${fieldName} is required.` };
  }

  if (trimmed.length < minLength) {
    return {
      isValid: false,
      error: `${fieldName} must be at least ${minLength} characters.`,
    };
  }

  return { isValid: true };
}

